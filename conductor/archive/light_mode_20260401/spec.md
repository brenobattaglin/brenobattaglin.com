# Specification: Light Mode Implementation (Revised)

## Overview
Implement a theme toggle (Light/Dark mode) for the personal website. The website will default to Dark mode to maintain its professional and minimalist aesthetic, while allowing users to switch to Light mode. The choice will be persisted using `localStorage`.

## Functional Requirements
- **Theme Toggle:** A Sun/Moon icon button in the `Header` component to switch between themes.
- **Default State:** The application must default to "Dark" mode for first-time visitors.
- **Persistence:** Save the user's theme selection in `localStorage`.
- **Initialization:** On application startup, check `localStorage` for a saved preference.
- **Centralized Theme Management:**
  - Use a global theme system (e.g., a React Context or a top-level `dark` class on the `<html>` or `<body>` element).
  - Use Tailwind CSS `dark:` utilities or CSS variables to define theme-specific styles globally.
  - **Goal:** Avoid component-level ternary operators for theme-specific styling.

## Non-Functional Requirements
- **Accessibility:** Ensure the toggle button is keyboard-navigable and has a descriptive `aria-label`.
- **Performance:** Theme switching should be instantaneous without page reloads.
- **Maintainability:** Minimal component logic for theme switching.

## Acceptance Criteria
- [x] A Sun/Moon toggle icon is present in the Header.
- [x] Clicking the toggle successfully switches between Light and Dark themes.
- [x] The theme preference persists after a page refresh.
- [x] New users see the Dark theme by default.
- [x] The codebase uses a clean theme system (Tailwind `dark:` or CSS variables) rather than conditional logic in each component.

## Out of Scope
- Automatic theme switching based on system preference (OS settings).
- Automatic switching based on time of day.
- Custom theme colors beyond the standard Light and Dark presets.
