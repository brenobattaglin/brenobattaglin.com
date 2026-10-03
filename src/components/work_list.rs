use crate::components::work_item::WorkItem;
use crate::hooks::use_intersection_observer::use_intersection_observer;
use leptos::prelude::*;

#[allow(dead_code)]
pub struct Project {
    pub id: &'static str,
    pub title: &'static str,
    pub description: &'static str,
    pub link: &'static str,
}

const PROJECTS: [Project; 4] = [
    Project {
        id: "01",
        title: "MY BMW",
        description: "Senior Software Engineer, Solutions Architect",
        link: "https://www.bmw.com",
    },
    Project {
        id: "02",
        title: "MINI",
        description: "Senior Software Engineer, Solutions Architect",
        link: "https://www.mini.com",
    },
    Project {
        id: "03",
        title: "ZALLPY",
        description: "Senior Software Engineer, Mobile Specialist",
        link: "https://www.zallpy.com",
    },
    Project {
        id: "04",
        title: "MINHA ENTRADA",
        description: "Android Developer",
        link: "https://minhaentrada.com.br",
    },
];

#[component]
pub fn WorkList() -> impl IntoView {
    let (element_ref, is_visible) = use_intersection_observer(0.1);

    view! {
        <div id="works" class="w-full pb-20">
            <div
                node_ref=element_ref
                class=move || {
                    format!(
                        "container mx-auto px-6 md:px-12 py-12 border-b border-app-text/10 mb-10 transition-all duration-1000 {}",
                        if is_visible.get() { "opacity-100" } else { "opacity-0" },
                    )
                }
            >
                <div class="flex justify-between items-end mb-4">
                    <h4 class="font-mono text-xs md:text-sm text-neutral-400 uppercase tracking-[0.2em]">
                        "Works " <span class="text-app-text">"(04)"</span>
                    </h4>
                    <span class="font-mono text-[10px] text-neutral-600 uppercase tracking-widest hidden md:inline-block">
                        "Scroll to explore"
                    </span>
                </div>
                <p class="font-mono text-sm text-neutral-400 max-w-2xl">
                    "Some projects and companies that I have and had the honor of working with."
                </p>
            </div>

            <div class="flex flex-col">
                {PROJECTS
                    .iter()
                    .enumerate()
                    .map(|(index, project)| {
                        view! {
                            <WorkItem
                                title=project.title
                                description=project.description
                                link=project.link
                                _index=index
                            />
                        }
                    })
                    .collect::<Vec<_>>()}
            </div>
        </div>
    }
}
