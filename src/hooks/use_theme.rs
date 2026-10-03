use leptos::prelude::*;

#[derive(Clone, Copy)]
pub struct ThemeContext {
    pub theme: ReadSignal<String>,
    set_theme: WriteSignal<String>,
}

impl ThemeContext {
    pub fn toggle(&self) {
        self.set_theme.update(|t| {
            *t = if *t == "light" {
                "dark".to_string()
            } else {
                "light".to_string()
            };
        });
    }
}

pub fn provide_theme_context() {
    let window = web_sys::window().expect("no window");
    let storage = window
        .local_storage()
        .expect("no local storage access")
        .expect("no local storage");
    let initial = storage
        .get_item("theme-preference")
        .ok()
        .flatten()
        .unwrap_or_else(|| "dark".to_string());

    let (theme, set_theme) = signal(initial);

    Effect::new(move |_| {
        let current = theme.get();
        let document = web_sys::window().unwrap().document().unwrap();
        let root = document.document_element().unwrap();
        let class_list = root.class_list();
        let _ = class_list.remove_2("light", "dark");
        let _ = class_list.add_1(&current);

        let storage = web_sys::window().unwrap().local_storage().unwrap().unwrap();
        let _ = storage.set_item("theme-preference", &current);
    });

    provide_context(ThemeContext { theme, set_theme });
}

pub fn use_theme() -> ThemeContext {
    use_context::<ThemeContext>().expect("ThemeContext not provided")
}
