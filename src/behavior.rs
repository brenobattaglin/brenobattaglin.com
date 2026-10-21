use crate::components::icons;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::IntersectionObserverInit;
use web_sys::{Document, Element, Event, IntersectionObserver, IntersectionObserverEntry};

const THEME_KEY: &str = "theme-preference";
const HEADER_OFFSET: f64 = 80.0;

pub fn init(document: &Document) {
    let Some(root) = document.document_element() else {
        return;
    };
    init_theme(document, &root);
    init_nav(&root);
    init_reveal(&root);
    init_fade_in(document);
}

fn select_all(root: &Element, selector: &str) -> Vec<Element> {
    let Ok(list) = root.query_selector_all(selector) else {
        return Vec::new();
    };
    (0..list.length())
        .filter_map(|i| list.item(i))
        .filter_map(|node| node.dyn_into::<Element>().ok())
        .collect()
}

fn listen(target: &Element, event: &str, handler: impl FnMut(Event) + 'static) {
    let cb = Closure::<dyn FnMut(Event)>::new(handler);
    let _ = target.add_event_listener_with_callback(event, cb.as_ref().unchecked_ref());
    cb.forget();
}

fn swap_classes(el: &Element, remove: &str, add: &str) {
    let list = el.class_list();
    for class in remove.split_whitespace() {
        let _ = list.remove_1(class);
    }
    for class in add.split_whitespace() {
        let _ = list.add_1(class);
    }
}

fn local_storage() -> Option<web_sys::Storage> {
    web_sys::window()?.local_storage().ok().flatten()
}

fn apply_theme(document: &Document, root: &Element, theme: &str) {
    swap_classes(root, "light dark", theme);

    if let Some(storage) = local_storage() {
        let _ = storage.set_item(THEME_KEY, theme);
    }

    let dark = theme == "dark";

    if let Some(header) = document.get_element_by_id("header") {
        let (remove, add) = if dark {
            ("text-black", "text-white")
        } else {
            ("text-white", "text-black")
        };
        swap_classes(&header, remove, add);
    }

    if let Some(button) = document.get_element_by_id("theme-toggle") {
        let icon = if dark {
            icons::sun("w-5 h-5")
        } else {
            icons::moon("w-5 h-5")
        };
        button.set_inner_html(&icon);
        let _ = button.set_attribute(
            "aria-label",
            if dark {
                "Switch to light mode"
            } else {
                "Switch to dark mode"
            },
        );
    }
}

fn init_theme(document: &Document, root: &Element) {
    let initial = local_storage()
        .and_then(|s| s.get_item(THEME_KEY).ok().flatten())
        .unwrap_or_else(|| "dark".to_string());
    apply_theme(document, root, &initial);

    let Some(button) = document.get_element_by_id("theme-toggle") else {
        return;
    };
    let document = document.clone();
    let root = root.clone();
    listen(&button, "click", move |_| {
        let next = if root.class_list().contains("light") {
            "dark"
        } else {
            "light"
        };
        apply_theme(&document, &root, next);
    });
}

fn init_nav(root: &Element) {
    for link in select_all(root, "a[data-nav]") {
        let link_ref = link.clone();
        listen(&link, "click", move |e| {
            e.prevent_default();
            let Some(href) = link_ref.get_attribute("href") else {
                return;
            };
            let Some(window) = web_sys::window() else {
                return;
            };
            let Some(target) = window
                .document()
                .and_then(|d| d.get_element_by_id(href.trim_start_matches('#')))
            else {
                return;
            };
            let top = target.get_bounding_client_rect().top() + window.scroll_y().unwrap_or(0.0)
                - HEADER_OFFSET;

            let options = web_sys::ScrollToOptions::new();
            options.set_top(top);
            options.set_behavior(web_sys::ScrollBehavior::Smooth);
            window.scroll_to_with_scroll_to_options(&options);
        });
    }
}

fn reveal(el: &Element) {
    let targets = std::iter::once(el.clone()).chain(select_all(el, "[data-shown]"));
    for target in targets {
        if let Some(shown) = target.get_attribute("data-shown") {
            let hidden = target.get_attribute("data-hidden").unwrap_or_default();
            swap_classes(&target, &hidden, &shown);
        }
    }
}

fn observe_once(el: &Element, threshold: f64) {
    let target = el.clone();
    let cb = Closure::<dyn FnMut(js_sys::Array, IntersectionObserver)>::new(
        move |entries: js_sys::Array, observer: IntersectionObserver| {
            for i in 0..entries.length() {
                let entry: IntersectionObserverEntry = entries.get(i).unchecked_into();
                if entry.is_intersecting() {
                    reveal(&target);
                    observer.unobserve(&entry.target());
                }
            }
        },
    );

    let init = IntersectionObserverInit::new();
    init.set_threshold(&JsValue::from_f64(threshold));

    if let Ok(observer) = IntersectionObserver::new_with_options(cb.as_ref().unchecked_ref(), &init)
    {
        observer.observe(el);
    }
    cb.forget();
}

fn init_reveal(root: &Element) {
    for el in select_all(root, "[data-observe]") {
        let threshold = el
            .get_attribute("data-observe")
            .and_then(|v| v.parse().ok())
            .unwrap_or(0.1);
        observe_once(&el, threshold);
    }
}

fn init_fade_in(document: &Document) {
    let (Some(app), Some(window)) = (document.get_element_by_id("app"), web_sys::window()) else {
        return;
    };
    let cb = Closure::once_into_js(move || swap_classes(&app, "opacity-0", "opacity-100"));
    let _ = window.set_timeout_with_callback_and_timeout_and_arguments_0(cb.unchecked_ref(), 100);
}
