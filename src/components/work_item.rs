use crate::hooks::use_intersection_observer::use_intersection_observer;
use leptos::prelude::*;

#[component]
pub fn WorkItem(
    title: &'static str,
    description: &'static str,
    link: &'static str,
    _index: usize,
) -> impl IntoView {
    let (element_ref, is_visible) = use_intersection_observer(0.2);

    let handle_click = move |_| {
        let _ = web_sys::window()
            .unwrap()
            .open_with_url_and_target_and_features(link, "_blank", "noopener,noreferrer");
    };

    view! {
        <div
            node_ref=element_ref
            class=move || {
                format!(
                    "group relative border-b border-app-text/10 transition-all duration-700 ease-out py-16 md:py-24 cursor-pointer hover:bg-app-text/5 {}",
                    if is_visible.get() {
                        "opacity-100 translate-y-0"
                    } else {
                        "opacity-0 translate-y-16"
                    },
                )
            }
            on:click=handle_click
        >
            <div class="container mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-baseline justify-between gap-6 md:gap-0">
                <h3 class="font-sans font-bold text-5xl md:text-7xl lg:text-8xl xl:text-[120px] 2xl:text-[140px] tracking-tighter text-app-text transition-all duration-500 group-hover:pl-4">
                    {title}
                </h3>
                <div class="flex flex-col md:items-end gap-2 font-mono text-xs md:text-sm uppercase tracking-widest text-neutral-400">
                    <span class="text-app-text transition-colors duration-300">
                        {description}
                    </span>
                </div>
            </div>
        </div>
    }
}
