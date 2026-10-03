use leptos::prelude::*;

struct SocialLink {
    name: &'static str,
    url: &'static str,
}

const SOCIAL_LINKS: [SocialLink; 2] = [
    SocialLink {
        name: "Github",
        url: "https://github.com/brenobattaglin",
    },
    SocialLink {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/brenobattaglin",
    },
];

const COPYRIGHT_TEXT: &str = "Breno Battaglin. All rights reserved.";

#[component]
pub fn Footer() -> impl IntoView {
    view! {
        <footer class="w-full bg-app-bg border-t border-app-text/10">
            <div class="container mx-auto px-6 md:px-12 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="flex items-center gap-2">
                    <span class="font-mono text-[11px] text-neutral-500 uppercase tracking-widest">
                        {COPYRIGHT_TEXT}
                    </span>
                </div>
                <div class="flex gap-8">
                    {SOCIAL_LINKS
                        .iter()
                        .map(|link| {
                            view! {
                                <a
                                    href=link.url
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="font-mono text-[11px] uppercase tracking-widest text-neutral-400 hover:text-app-text transition-colors"
                                >
                                    {link.name}
                                </a>
                            }
                        })
                        .collect::<Vec<_>>()}
                </div>
            </div>
        </footer>
    }
}
