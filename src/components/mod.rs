pub mod about;
pub mod contact;
pub mod footer;
pub mod header;
pub mod icons;
pub mod work_list;

pub fn page() -> String {
    let header = header::render();
    let hero = about::render();
    let works = work_list::render();
    let contact = contact::render();
    let footer = footer::render();

    format!(
        r##"<div id="app" class="min-h-screen bg-app-bg text-app-text selection:bg-app-selection-bg selection:text-app-selection-text transition-opacity duration-1000 opacity-0">{header}<main class="relative z-10">{hero}{works}{contact}</main>{footer}</div>"##
    )
}
