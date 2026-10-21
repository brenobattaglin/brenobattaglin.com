const NAV_ITEMS: [(&str, &str); 3] = [
    ("About", "#about"),
    ("Works", "#works"),
    ("Contact", "#contact"),
];

pub fn render() -> String {
    let items: String = NAV_ITEMS
        .iter()
        .map(|(label, href)| {
            format!(
                r##"<li><a href="{href}" data-nav class="relative group cursor-pointer">{label}<span class="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span></a></li>"##
            )
        })
        .collect();

    format!(
        r##"<header id="header" class="fixed top-0 left-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-center items-center z-40 text-white"><nav><ul class="flex space-x-8 font-mono text-xs md:text-sm tracking-widest uppercase">{items}</ul></nav><button id="theme-toggle" class="absolute right-6 md:right-12 p-2 hover:bg-current/10 rounded-full transition-colors focus:outline-hidden"></button></header>"##
    )
}
