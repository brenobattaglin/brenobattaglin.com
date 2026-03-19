# Implementation Plan: Remove CDN Dependencies

## Phase 1: Local Font Migration
- [ ] Task: Audit `index.html` and `index.css` for Google Font references.
- [ ] Task: Implement: Download "Italiana", "JetBrains Mono", and "Inter" (WOFF2, WOFF, TTF) to `public/fonts/`.
- [ ] Task: Implement: Update `index.css` with `@font-face` rules for all font families and weights.
- [ ] Task: Implement: Remove Google Font links and preconnect tags from `index.html`.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Local Font Migration' (Protocol in workflow.md)

## Phase 2: External Resource Audit and Localization
- [ ] Task: Audit all component files for any remaining CDN-hosted scripts or styles (e.g., unpkg, cdnjs, jsdelivr).
- [ ] Task: Implement: Replace any identified CDN-hosted libraries with local files in `public/` or as npm packages.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: External Resource Audit and Localization' (Protocol in workflow.md)

## Phase 3: Build Optimization and Final Verification
- [ ] Task: Configure Vite to inline small assets in `vite.config.ts`.
- [ ] Task: Implement: Run `npm run build` and inspect the `dist/` folder for external domain requests.
- [ ] Task: Implement: Perform final Lighthouse audit to verify performance and zero external font requests.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Build Optimization and Final Verification' (Protocol in workflow.md)
