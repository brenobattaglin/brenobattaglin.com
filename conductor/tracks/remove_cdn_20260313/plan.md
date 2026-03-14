# Implementation Plan: Remove CDN Dependencies

## Phase 1: Local Font Migration

- [ ] Task: Audit `index.html` and `index.css` for Google Font references.
- [ ] Task: Write Tests: Verify font-face declarations point to local assets (TDD).
- [ ] Task: Implement: Download "Italiana", "JetBrains Mono", and "Inter" WOFF2 files to `public/fonts/`.
- [ ] Task: Implement: Update `index.css` with `@font-face` rules and remove Google Font links from `index.html`.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Local Font Migration' (Protocol in workflow.md)

## Phase 2: External Resource Audit and Localization

- [ ] Task: Audit components and `package.json` for any other CDN-hosted scripts or styles.
- [ ] Task: Write Tests: Ensure no `https://` links exist in build output for assets (TDD).
- [ ] Task: Implement: Replace any CDN-hosted libraries with local npm packages or local files in `public/`.
- [ ] Task: Implement: Update component imports to use local assets.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: External Resource Audit and Localization' (Protocol in workflow.md)

## Phase 3: Vite Optimization and Final Verification

- [ ] Task: Configure Vite to inline small assets in `vite.config.ts`.
- [ ] Task: Write Tests: Verify build output size and asset inlining (TDD).
- [ ] Task: Implement: Run `npm run build` and inspect the `dist/` folder for external domain requests.
- [ ] Task: Implement: Perform final Lighthouse audit to verify performance and zero external requests.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Vite Optimization and Final Verification' (Protocol in workflow.md)
