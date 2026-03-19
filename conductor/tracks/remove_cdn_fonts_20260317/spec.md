# Specification: Remove CDN Dependencies (Fonts)

## Overview
This track aims to eliminate all external Content Delivery Network (CDN) dependencies, specifically focusing on Google Fonts. By hosting these fonts locally using `@fontsource` NPM packages, the project will improve privacy, reliability, and initial load performance.

## Goals & Objectives
- Replace all Google Fonts CDN links with local NPM-hosted versions.
- Ensure the site functions correctly without making any external network requests to third-party CDNs.
- Maintain the existing typographic design (Inter, Italiana, JetBrains Mono).

## Functional Requirements
- **Local Font Hosting:** Install and integrate `@fontsource` packages for Inter, Italiana, and JetBrains Mono.
- **HTML Cleanup:** Remove all `<link>` and `<meta>` tags related to Google Fonts (googleapis.com, gstatic.com) from `index.html`.
- **CSS Update:** Update `index.css` to use the locally imported fonts via the `@fontsource` packages.

## Non-Functional Requirements
- **Privacy:** No user data or requests sent to third-party CDNs on page load.
- **Reliability:** The site remains fully functional even if external CDNs are unavailable.

## Acceptance Criteria
- [ ] `index.html` contains no references to `fonts.googleapis.com` or `fonts.gstatic.com`.
- [ ] `package.json` includes the `@fontsource` dependencies.
- [ ] All three fonts (Inter, Italiana, JetBrains Mono) render correctly with the specified weights.
- [ ] Browser Network tab shows zero requests to external font CDNs on initial load.

## Out of Scope
- Modifying local assets in `public/images/`.
- Changing the overall design or adding new fonts.
- Implementing a service worker for offline support (unless already part of the project).
