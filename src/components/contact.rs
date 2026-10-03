use crate::components::icons::{BriefcaseIcon, MailIcon};
use crate::hooks::use_intersection_observer::use_intersection_observer;
use leptos::prelude::*;

const LINKEDIN_URL: &str = "https://www.linkedin.com/in/brenobattaglin";
const EMAIL_ADDRESS: &str = "contato@breno.simplelogin.com";

#[component]
fn AmbientBackground() -> impl IntoView {
    view! {
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-app-text/5 rounded-full blur-[100px]" />
        </div>
    }
}

#[component]
fn ProfileAvatar(is_visible: ReadSignal<bool>) -> impl IntoView {
    view! {
        <div class=move || {
            format!(
                "mb-8 transition-all duration-700 delay-300 transform {}",
                if is_visible.get() {
                    "opacity-100 scale-100"
                } else {
                    "opacity-0 scale-95"
                },
            )
        }>
            <div class="relative group">
                <div class="absolute inset-0 rounded-full bg-linear-to-br from-neutral-500/10 to-app-text/10 blur-md group-hover:blur-lg transition-all duration-500" />
                <div class="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-app-text/10 group-hover:border-app-text/30 transition-all duration-500">
                    <img
                        src="/images/profile.jpg"
                        alt="Breno Battaglin profile photo"
                        class="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    }
}

#[component]
fn LinkedInButton() -> impl IntoView {
    view! {
        <a
            href=LINKEDIN_URL
            target="_blank"
            rel="noopener noreferrer"
            class="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-mono text-sm uppercase tracking-widest overflow-hidden min-w-[280px]"
        >
            <div class="absolute inset-0 bg-app-text/5 rounded-full border border-app-text/10 group-hover:border-app-text/30 transition-all duration-300" />
            <div class="absolute inset-0 bg-linear-to-r from-app-text/0 via-app-text/5 to-app-text/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            <span class="relative z-10 text-app-text group-hover:text-neutral-500 transition-colors duration-300">
                "Connect on LinkedIn"
            </span>
            <BriefcaseIcon class="relative z-10 w-4 h-4 text-app-text/50 transform group-hover:translate-x-1 transition-transform duration-300" />
        </a>
    }
}

#[component]
fn EmailButton() -> impl IntoView {
    let mailto = format!("mailto:{}", EMAIL_ADDRESS);

    view! {
        <a
            href=mailto
            class="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-mono text-sm uppercase tracking-widest overflow-hidden min-w-[280px]"
        >
            <div class="absolute inset-0 bg-app-text/5 rounded-full border border-app-text/10 group-hover:border-app-text/30 transition-all duration-300" />
            <div class="absolute inset-0 bg-linear-to-r from-app-text/0 via-app-text/5 to-app-text/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            <span class="relative z-10 text-app-text group-hover:text-neutral-500 transition-colors duration-300">
                "Send Message"
            </span>
            <MailIcon class="relative z-10 w-4 h-4 text-app-text/50 transform group-hover:translate-x-1 transition-transform duration-300" />
        </a>
    }
}

#[component]
pub fn Contact() -> impl IntoView {
    let (element_ref, is_visible) = use_intersection_observer(0.2);

    view! {
        <div
            id="contact"
            node_ref=element_ref
            class="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 py-20"
        >
            <AmbientBackground />

            <div class=move || {
                format!(
                    "relative z-10 flex flex-col items-center max-w-2xl transition-all duration-1000 transform {}",
                    if is_visible.get() {
                        "opacity-100 translate-y-0"
                    } else {
                        "opacity-0 translate-y-20"
                    },
                )
            }>
                <ProfileAvatar is_visible=is_visible />

                <div class="flex items-center gap-2 mb-4">
                    <div class="w-2 h-2 rounded-full bg-neutral-400 animate-pulse" />
                    <span class="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                        "Available for new projects"
                    </span>
                </div>

                <h2 class="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-6 text-app-text">
                    "Contact Me"
                </h2>

                <p class="font-mono text-sm text-center text-neutral-400 mb-8 leading-relaxed max-w-lg">
                    "Always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
                </p>

                <div class="flex flex-col gap-4">
                    <EmailButton />
                    <LinkedInButton />
                </div>
            </div>
        </div>
    }
}
