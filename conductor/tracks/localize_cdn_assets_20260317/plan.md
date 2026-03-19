# Implementation Plan: Remove CDN Dependencies

## Phase 1: Local Font Migration [checkpoint: 301d6dd]
- [x] Task: Audit `index.html` and `index.css` for Google Font references. 1cbd7e9
- [x] Task: Implement: Download "Italiana", "JetBrains Mono", and "Inter" (WOFF2, WOFF, TTF) to `public/fonts/`. 1cbd7e9
- [x] Task: Implement: Update `index.css` with `@font-face` rules for all font families and weights. 1cbd7e9
- [x] Task: Implement: Remove Google Font links and preconnect tags from `index.html`. 1cbd7e9
- [x] Task: Conductor - User Manual Verification 'Phase 1: Local Font Migration' (Protocol in workflow.md)

## Phase 2: External Resource Audit and Localization [checkpoint: 761935d]
- [x] Task: Audit all component files for any remaining CDN-hosted scripts or styles (e.g., unpkg, cdnjs, jsdelivr). 5a61614
- [x] Task: Implement: Replace any identified CDN-hosted libraries with local files in `public/` or as npm packages. 5a61614
- [x] Task: Conductor - User Manual Verification 'Phase 2: External Resource Audit and Localization' (Protocol in workflow.md)

## Phase 3: Build Optimization and Final Verification
- [x] Task: Configure Vite to inline small assets in `vite.config.ts`. 1cbd7e9
- [x] Task: Implement: Run `npm run build` and inspect the `dist/` folder for external domain requests. 1cbd7e9
- [x] Task: Implement: Perform final Lighthouse audit to verify performance and zero external font requests. 1cbd7e9
- [~] Task: Conductor - User Manual Verification 'Phase 3: Build Optimization and Final Verification' (Protocol in workflow.md)
