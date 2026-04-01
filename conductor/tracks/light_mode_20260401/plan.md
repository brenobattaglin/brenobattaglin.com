# Implementation Plan: Light Mode

## Phase 1: Foundation (Theme Context & Storage)
- [x] Task: Create `hooks/useTheme.ts` to manage the theme state and persist it to `localStorage`. 72cd004
- [x] Task: Create `hooks/useTheme.test.ts` to verify theme state management and persistence. 72cd004
- [ ] Task: Update `App.tsx` to handle the global theme class on the document root or a top-level wrapper.
- [ ] Task: Conductor - User Manual Verification 'Foundation (Theme Context & Storage)' (Protocol in workflow.md)

## Phase 2: Global Styling Strategy
- [ ] Task: Update `index.css` to define theme-aware CSS variables for background, text, and other key colors using `@theme`.
- [ ] Task: Modify the `body` styles in `index.css` to use these variables, ensuring they update based on the theme.
- [ ] Task: Conductor - User Manual Verification 'Global Styling Strategy' (Protocol in workflow.md)

## Phase 3: Icons & Toggle Component
- [ ] Task: Create `components/icons/SunIcon.tsx` and `components/icons/MoonIcon.tsx`.
- [ ] Task: Update `components/Header.tsx` to include the theme toggle button with the new icons.
- [ ] Task: Update `components/Header.test.tsx` to verify the toggle functionality and icon switching.
- [ ] Task: Conductor - User Manual Verification 'Icons & Toggle Component' (Protocol in workflow.md)

## Phase 4: Component Theming Refactor
- [ ] Task: Update `components/About.tsx`, `components/WorkList.tsx`, `components/WorkItem.tsx`, `components/Contact.tsx`, and `components/Footer.tsx` to use Tailwind's `dark:` classes or theme-aware CSS variables.
- [ ] Task: Refactor any hardcoded color classes (e.g., `bg-black`, `text-white`) to be theme-aware.
- [ ] Task: Conductor - User Manual Verification 'Component Refactor (Theming)' (Protocol in workflow.md)

## Phase 5: Final Quality Pass
- [ ] Task: Run the full test suite (`npm test`) and ensure all tests pass with >90% coverage.
- [ ] Task: Perform a final visual and accessibility audit in both Light and Dark modes.
- [ ] Task: Conductor - User Manual Verification 'Final Quality Pass' (Protocol in workflow.md)
