use leptos::prelude::*;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;

pub fn use_intersection_observer(threshold: f64) -> (NodeRef<leptos::html::Div>, ReadSignal<bool>) {
    let node_ref = NodeRef::<leptos::html::Div>::new();
    let (is_visible, set_is_visible) = signal(false);

    Effect::new(move |_| {
        let Some(el) = node_ref.get() else { return };

        let set_visible = set_is_visible;
        let cb = Closure::wrap(Box::new(
            move |entries: js_sys::Array, observer: web_sys::IntersectionObserver| {
                for i in 0..entries.length() {
                    let entry: web_sys::IntersectionObserverEntry = entries.get(i).unchecked_into();
                    if entry.is_intersecting() {
                        set_visible.set(true);
                        observer.unobserve(&entry.target());
                    }
                }
            },
        )
            as Box<dyn FnMut(js_sys::Array, web_sys::IntersectionObserver)>);

        let init = web_sys::IntersectionObserverInit::new();
        init.set_threshold(&JsValue::from_f64(threshold));

        if let Ok(observer) =
            web_sys::IntersectionObserver::new_with_options(cb.as_ref().unchecked_ref(), &init)
        {
            let el_ref: &web_sys::Element = (*el).unchecked_ref();
            observer.observe(el_ref);
        }

        cb.forget();
    });

    (node_ref, is_visible)
}
