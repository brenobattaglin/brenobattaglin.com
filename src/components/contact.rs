use super::icons;

const LINKEDIN_URL: &str = "https://www.linkedin.com/in/brenobattaglin";
const EMAIL_ADDRESS: &str = "contato@breno.simplelogin.com";

const BUTTON_CLASS: &str = "group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-mono text-sm uppercase tracking-widest overflow-hidden min-w-[280px]";
const ICON_CLASS: &str = "relative z-10 w-4 h-4 text-app-text/50 transform group-hover:translate-x-1 transition-transform duration-300";

fn button(href: &str, external: bool, label: &str, icon: &str) -> String {
    let target = if external {
        r##" target="_blank" rel="noopener noreferrer""##
    } else {
        ""
    };

    format!(
        r##"<a href="{href}"{target} class="{BUTTON_CLASS}"><div class="absolute inset-0 bg-app-text/5 rounded-full border border-app-text/10 group-hover:border-app-text/30 transition-all duration-300"></div><div class="absolute inset-0 bg-linear-to-r from-app-text/0 via-app-text/5 to-app-text/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div><span class="relative z-10 text-app-text group-hover:text-neutral-500 transition-colors duration-300">{label}</span>{icon}</a>"##
    )
}

pub fn render() -> String {
    let email = button(
        &format!("mailto:{EMAIL_ADDRESS}"),
        false,
        "Send Message",
        &icons::mail(ICON_CLASS),
    );
    let linkedin = button(
        LINKEDIN_URL,
        true,
        "Connect on LinkedIn",
        &icons::briefcase(ICON_CLASS),
    );

    format!(
        r##"<div id="contact" data-observe="0.2" class="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 py-20"><div class="absolute inset-0 pointer-events-none"><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-app-text/5 rounded-full blur-[100px]"></div></div><div data-hidden="opacity-0 translate-y-20" data-shown="opacity-100 translate-y-0" class="relative z-10 flex flex-col items-center max-w-2xl transition-all duration-1000 transform opacity-0 translate-y-20"><div data-hidden="opacity-0 scale-95" data-shown="opacity-100 scale-100" class="mb-8 transition-all duration-700 delay-300 transform opacity-0 scale-95"><div class="relative group"><div class="absolute inset-0 rounded-full bg-linear-to-br from-neutral-500/10 to-app-text/10 blur-md group-hover:blur-lg transition-all duration-500"></div><div class="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-app-text/10 group-hover:border-app-text/30 transition-all duration-500"><img src="/images/profile.jpg" alt="Breno Battaglin profile photo" class="w-full h-full object-cover" /></div></div></div><div class="flex items-center gap-2 mb-4"><div class="w-2 h-2 rounded-full bg-neutral-400 animate-pulse"></div><span class="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">Available for new projects</span></div><h2 class="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-6 text-app-text">Contact Me</h2><p class="font-mono text-sm text-center text-neutral-400 mb-8 leading-relaxed max-w-lg">Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p><div class="flex flex-col gap-4">{email}{linkedin}</div></div></div>"##
    )
}
