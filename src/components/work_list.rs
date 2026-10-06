struct Project {
    title: &'static str,
    description: &'static str,
    link: &'static str,
}

const PROJECTS: [Project; 4] = [
    Project {
        title: "MY BMW",
        description: "Senior Software Engineer, Solutions Architect",
        link: "https://www.bmw.com",
    },
    Project {
        title: "MINI",
        description: "Senior Software Engineer, Solutions Architect",
        link: "https://www.mini.com",
    },
    Project {
        title: "ZALLPY",
        description: "Senior Software Engineer, Mobile Specialist",
        link: "https://www.zallpy.com",
    },
    Project {
        title: "MINHA ENTRADA",
        description: "Android Developer",
        link: "https://minhaentrada.com.br",
    },
];

fn work_item(project: &Project) -> String {
    let Project {
        title,
        description,
        link,
    } = project;

    format!(
        r##"<a href="{link}" target="_blank" rel="noopener noreferrer" data-observe="0.2" data-hidden="opacity-0 translate-y-16" data-shown="opacity-100 translate-y-0" class="block group relative border-b border-app-text/10 transition-all duration-700 ease-out py-16 md:py-24 cursor-pointer hover:bg-app-text/5 opacity-0 translate-y-16"><div class="container mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-baseline justify-between gap-6 md:gap-0"><h3 class="font-sans font-bold text-5xl md:text-7xl lg:text-8xl xl:text-[120px] 2xl:text-[140px] tracking-tighter text-app-text transition-all duration-500 group-hover:pl-4">{title}</h3><div class="flex flex-col md:items-end gap-2 font-mono text-xs md:text-sm uppercase tracking-widest text-neutral-400"><span class="text-app-text transition-colors duration-300">{description}</span></div></div></a>"##
    )
}

pub fn render() -> String {
    let items: String = PROJECTS.iter().map(work_item).collect();

    format!(
        r##"<div id="works" class="w-full pb-20"><div data-observe="0.1" data-hidden="opacity-0" data-shown="opacity-100" class="container mx-auto px-6 md:px-12 py-12 border-b border-app-text/10 mb-10 transition-all duration-1000 opacity-0"><div class="flex justify-between items-end mb-4"><h4 class="font-mono text-xs md:text-sm text-neutral-400 uppercase tracking-[0.2em]">Works <span class="text-app-text">(04)</span></h4><span class="font-mono text-[10px] text-neutral-600 uppercase tracking-widest hidden md:inline-block">Scroll to explore</span></div><p class="font-mono text-sm text-neutral-400 max-w-2xl">Some projects and companies that I have and had the honor of working with.</p></div><div class="flex flex-col">{items}</div></div>"##
    )
}
