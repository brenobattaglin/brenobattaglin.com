use crate::components::icons::{MoonIcon, SunIcon};
use crate::hooks::use_theme::use_theme;
use leptos::prelude::*;

struct NavItem {
    label: &'static str,
    href: &'static str,
}

const NAV_ITEMS: [NavItem; 3] = [
    NavItem {
        label: "About",
        href: "#about",
    },
    NavItem {
        label: "Works",
        href: "#works",
    },
    NavItem {
        label: "Contact",
        href: "#contact",
    },
];

#[component]
fn NavLink(#[prop(into)] label: String, #[prop(into)] href: String) -> impl IntoView {
    let href_clone = href.clone();
    let handle_click = move |e: web_sys::MouseEvent| {
        e.prevent_default();
        let target_id = href_clone.trim_start_matches('#');
        let document = web_sys::window().unwrap().document().unwrap();
        if let Some(target_element) = document.get_element_by_id(target_id) {
            let header_offset = 80.0;
            let rect = target_element.get_bounding_client_rect();
            let element_position = rect.top();
            let window = web_sys::window().unwrap();
            let offset_position =
                element_position + window.scroll_y().unwrap_or(0.0) - header_offset;

            let options = web_sys::ScrollToOptions::new();
            options.set_top(offset_position);
            options.set_behavior(web_sys::ScrollBehavior::Smooth);
            window.scroll_to_with_scroll_to_options(&options);
        }
    };

    view! {
        <li>
            <a href=href on:click=handle_click class="relative group cursor-pointer">
                {label}
                <span class="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span>
            </a>
        </li>
    }
}

#[component]
pub fn Header() -> impl IntoView {
    let theme_ctx = use_theme();

    let toggle = move |_| {
        theme_ctx.toggle();
    };

    view! {
        <header class=move || {
            format!(
                "fixed top-0 left-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-center items-center z-40 {}",
                if theme_ctx.theme.get() == "light" {
                    "text-black"
                } else {
                    "text-white"
                },
            )
        }>
            <nav>
                <ul class="flex space-x-8 font-mono text-xs md:text-sm tracking-widest uppercase">
                    {NAV_ITEMS
                        .iter()
                        .map(|item| {
                            view! { <NavLink label=item.label href=item.href /> }
                        })
                        .collect::<Vec<_>>()}
                </ul>
            </nav>

            <button
                on:click=toggle
                class="absolute right-6 md:right-12 p-2 hover:bg-current/10 rounded-full transition-colors focus:outline-hidden"
                aria-label=move || {
                    format!(
                        "Switch to {} mode",
                        if theme_ctx.theme.get() == "dark" { "light" } else { "dark" },
                    )
                }
            >
                {move || {
                    if theme_ctx.theme.get() == "dark" {
                        view! { <SunIcon class="w-5 h-5" /> }.into_any()
                    } else {
                        view! { <MoonIcon class="w-5 h-5" /> }.into_any()
                    }
                }}
            </button>
        </header>
    }
}
