# Implementation Plan: Remove CDN Dependencies (Fonts)

## Phase 1: Preparation
- [ ] Task: Create development branch `feature/remove-cdn` from `master`.
- [ ] Task: Audit `index.html` and `index.css` to confirm all current CDN dependencies.
- [ ] Task: Conductor - User Manual Verification 'Preparation' (Protocol in workflow.md)

## Phase 2: Dependency Setup
- [ ] Task: Install `@fontsource/inter`, `@fontsource/italiana`, and `@fontsource/jetbrains-mono`.
- [ ] Task: Verify `package.json` contains the new dependencies.
- [ ] Task: Conductor - User Manual Verification 'Dependency Setup' (Protocol in workflow.md)

## Phase 3: Integration (TDD)
- [ ] Task: Write failing tests in `__tests__/cdn-check.test.tsx` to verify that Google Fonts CDN links are *not* present in the document.
- [ ] Task: Implement: Remove all `<link>` and `<preconnect>` tags related to Google Fonts from `index.html`.
- [ ] Task: Implement: Add `@fontsource` imports to `index.css` for all required fonts and weights.
- [ ] Task: Verify that the newly written tests pass.
- [ ] Task: Conductor - User Manual Verification 'Integration (TDD)' (Protocol in workflow.md)

## Phase 4: Final Cleanup & Verification
- [ ] Task: Perform a final audit of the codebase for any remaining `unpkg`, `cdnjs`, or `jsdelivr` links.
- [ ] Task: Manually verify the visual appearance of the fonts (Inter, Italiana, JetBrains Mono) across the site.
- [ ] Task: Verify that the browser Network tab shows zero external requests to CDN domains on initial load.
- [ ] Task: Conductor - User Manual Verification 'Final Cleanup & Verification' (Protocol in workflow.md)
