use crate::hooks::use_intersection_observer::use_intersection_observer;
use leptos::prelude::*;

#[component]
fn InfoPill(
    label: &'static str,
    value: &'static str,
    indicator_color: &'static str,
    #[prop(default = false)] animated: bool,
    #[prop(default = "left")] align: &'static str,
) -> impl IntoView {
    let container_class = if align == "right" {
        "flex flex-col gap-1 items-end"
    } else {
        "flex flex-col gap-1"
    };

    let indicator_class = format!(
        "w-2 h-2 rounded-full {} {}",
        indicator_color,
        if animated { "animate-pulse" } else { "" }
    );

    view! {
        <div class=container_class>
            <span class="font-mono text-[10px] text-neutral-500 uppercase">{label}</span>
            <div class="flex items-center gap-2">
                <div class=indicator_class />
                <span class="font-sans text-sm">{value}</span>
            </div>
        </div>
    }
}

#[component]
fn CircularGraphic(is_visible: ReadSignal<bool>) -> impl IntoView {
    view! {
        <div class=move || {
            format!(
                "absolute bottom-[15vh] transition-all duration-1000 delay-700 transform {}",
                if is_visible.get() {
                    "opacity-100 scale-100"
                } else {
                    "opacity-0 scale-90"
                },
            )
        }>
            <div class="relative w-48 h-48 md:w-64 md:h-64 border border-app-text/5 rounded-full flex items-center justify-center">
                <div class="absolute inset-0 border border-app-text/10 rounded-full animate-spin-slow" />
                <div class="w-32 h-32 md:w-48 md:h-48 border border-app-text/10 rounded-full flex items-center justify-center">
                    <div class="w-1 h-1 bg-app-text rounded-full shadow-[0_0_10px_rgba(var(--foreground),0.8)]" />
                </div>
            </div>
        </div>
    }
}

#[component]
fn ScrollIndicator() -> impl IntoView {
    view! {
        <div class="absolute bottom-8 flex flex-col items-center gap-2">
            <span class="font-mono text-[10px] tracking-widest uppercase opacity-60">"Scroll"</span>
            <div class="w-px h-12 bg-app-text/30" />
        </div>
    }
}

#[component]
fn AmbientLight() -> impl IntoView {
    view! {
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-app-text/5 rounded-full blur-[120px] animate-pulse-slow" />
        </div>
    }
}

#[component]
pub fn Hero() -> impl IntoView {
    let (element_ref, is_visible) = use_intersection_observer(0.1);

    view! {
        <div
            id="about"
            node_ref=element_ref
            class="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4"
        >
            <AmbientLight />

            <div class=move || {
                format!(
                    "relative z-10 flex flex-col items-center transition-all duration-1000 transform {}",
                    if is_visible.get() {
                        "opacity-100 translate-y-0"
                    } else {
                        "opacity-0 translate-y-20"
                    },
                )
            }>
                <h1 class="font-serif text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[140px] 2xl:text-[180px] max-w-[1400px] leading-[0.9] text-center tracking-tighter dark:mix-blend-screen text-app-text">
                    "BRENO"
                    <br />
                    "BATTAGLIN"
                </h1>

                <div class="mt-8 md:mt-12 overflow-hidden">
                    <p class=move || {
                        format!(
                            "font-mono text-sm md:text-base lg:text-lg tracking-[0.2em] uppercase text-neutral-400 transition-transform duration-1000 delay-500 transform {}",
                            if is_visible.get() {
                                "translate-y-0"
                            } else {
                                "translate-y-full"
                            },
                        )
                    }>"Software Engineer"</p>
                </div>
            </div>

            <CircularGraphic is_visible=is_visible />
            <ScrollIndicator />

            <div class="absolute bottom-8 left-6 md:left-12 hidden md:block">
                <InfoPill label="Location" value="Brazil" indicator_color="bg-neutral-400" />
            </div>
        </div>
    }
}
