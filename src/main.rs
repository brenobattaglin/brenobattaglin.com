mod behavior;
mod components;

fn main() {
    console_error_panic_hook::set_once();

    let document = web_sys::window()
        .expect("no window")
        .document()
        .expect("no document");
    document
        .body()
        .expect("no body")
        .set_inner_html(&components::page());

    behavior::init(&document);
}
