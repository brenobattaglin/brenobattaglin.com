use crate::components::about::Hero;
use crate::components::contact::Contact;
use crate::components::footer::Footer;
use crate::components::header::Header;
use crate::components::work_list::WorkList;
use crate::hooks::use_theme::provide_theme_context;
use leptos::leptos_dom::helpers::set_timeout;
use leptos::prelude::*;
use std::time::Duration;

#[component]
pub fn App() -> impl IntoView {
    provide_theme_context();
    let (is_loaded, set_is_loaded) = signal(false);

    set_timeout(
        move || {
            set_is_loaded.set(true);
        },
        Duration::from_millis(100),
    );

    view! {
        <div
            class="min-h-screen bg-app-bg text-app-text selection:bg-app-selection-bg selection:text-app-selection-text transition-opacity duration-1000"
            class:opacity-100=move || is_loaded.get()
            class:opacity-0=move || !is_loaded.get()
        >
            <Header />
            <main class="relative z-10">
                <Hero />
                <WorkList />
                <Contact />
            </main>
            <Footer />
        </div>
    }
}
