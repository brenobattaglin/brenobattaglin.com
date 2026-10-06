const SOCIAL_LINKS: [(&str, &str); 2] = [
    ("Github", "https://github.com/brenobattaglin"),
    ("LinkedIn", "https://www.linkedin.com/in/brenobattaglin"),
];

const COPYRIGHT_TEXT: &str = "Breno Battaglin. All rights reserved.";

pub fn render() -> String {
    let links: String = SOCIAL_LINKS
        .iter()
        .map(|(name, url)| {
            format!(
                r##"<a href="{url}" target="_blank" rel="noopener noreferrer" class="font-mono text-[11px] uppercase tracking-widest text-neutral-400 hover:text-app-text transition-colors">{name}</a>"##
            )
        })
        .collect();

    format!(
        r##"<footer class="w-full bg-app-bg border-t border-app-text/10"><div class="container mx-auto px-6 md:px-12 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6"><div class="flex items-center gap-2"><span class="font-mono text-[11px] text-neutral-500 uppercase tracking-widest">{COPYRIGHT_TEXT}</span></div><div class="flex gap-8">{links}</div></div></footer>"##
    )
}
