# Implementation Plan: Light Mode

## Phase 1: Foundation (Theme Context & Storage) [checkpoint: c424f9f]

- [x] Task: Create `hooks/useTheme.ts` to manage the theme state and persist it to `localStorage`. 72cd004
- [x] Task: Create `hooks/useTheme.test.ts` to verify theme state management and persistence. 72cd004
- [x] Task: Update `App.tsx` to handle the global theme class on the document root or a top-level wrapper. 550dc72
- [x] Task: Conductor - User Manual Verification 'Foundation (Theme Context & Storage)' (Protocol in workflow.md) c424f9f

## Phase 2: Global Styling Strategy

- [x] Task: Update `index.css` to define theme-aware CSS variables for background, text, and other key colors using `@theme`. 20f19ec
- [x] Task: Modify the `body` styles in `index.css` to use these variables, ensuring they update based on the theme. 20f19ec
- [x] Task: Conductor - User Manual Verification 'Global Styling Strategy' (Protocol in workflow.md) [checkpoint: 5068f21]

## Phase 3: Icons & Toggle Component

- [x] Task: Create `components/icons/SunIcon.tsx` and `components/icons/MoonIcon.tsx`. 793b802
- [x] Task: Update `components/Header.tsx` to include the theme toggle button with the new icons. ba94c9c
- [x] Task: Update `components/Header.test.tsx` to verify the toggle functionality and icon switching. ba94c9c
- [x] Task: Conductor - User Manual Verification 'Icons & Toggle Component' (Protocol in workflow.md) [checkpoint: 6137bda]

## Phase 4: Component Theming Refactor [checkpoint: 5068f21]

- [x] Task: Update `components/About.tsx`, `components/WorkList.tsx`, `components/WorkItem.tsx`, `components/Contact.tsx`, and `components/Footer.tsx` to use Tailwind's `dark:` classes or theme-aware CSS variables. 5068f21
- [x] Task: Refactor any hardcoded color classes (e.g., `bg-black`, `text-white`) to be theme-aware. 5068f21
- [x] Task: Conductor - User Manual Verification 'Component Refactor (Theming)' (Protocol in workflow.md) 5068f21

## Phase 5: Final Quality Pass

- [x] Task: Run the full test suite (`npm test`) and ensure all tests pass with >90% coverage. 6137bda
- [x] Task: Perform a final visual and accessibility audit in both Light and Dark modes. 6137bda
- [x] Task: Conductor - User Manual Verification 'Final Quality Pass' (Protocol in workflow.md) 6137bda
