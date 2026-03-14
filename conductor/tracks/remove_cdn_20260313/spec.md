# Specification: Remove CDN Dependencies

## Overview

This track aims to eliminate all external Content Delivery Network (CDN) dependencies from the project. By hosting all assets (fonts, libraries, and images) locally, we will improve privacy, reliability, and load performance while ensuring the site functions without external network requests.

## Functional Requirements

- **Local Font Hosting:**
  - Download and store "Italiana", "JetBrains Mono", and "Inter" font files locally.
  - Support the modern **WOFF2** format for optimal compression.
  - Update `index.html` and `index.css` to use local font files via `@font-face`.
- **External Resource Migration:**
  - Audit all `index.html` and component files for any remaining `http/https` links to external libraries or styles.
  - Download any required external scripts or styles and bundle them using Vite.
- **Image & Media Review:**
  - Ensure all images (like `profile.jpg`) are served from the `public/` directory or bundled by Vite.
- **Build Optimization:**
  - Configure Vite to inline small assets where appropriate to reduce the number of HTTP requests.

## Non-Functional Requirements

- **Privacy:** No user data or requests should be sent to third-party CDNs (e.g., Google).
- **Performance:** Achieve a faster First Contentful Paint (FCP) by reducing DNS lookups and TLS handshakes.
- **Reliability:** The site must remain fully functional even if external CDNs are unavailable.

## Acceptance Criteria

- [ ] No network requests to external domains (other than intentional outbound links) on initial page load.
- [ ] All fonts render correctly using locally hosted WOFF2 files.
- [ ] Vite build completes successfully with localized assets.
- [ ] Page load speed (Lighthouse or similar) shows improvement in FCP/LCP metrics.

## Out of Scope

- Migrating external links in the footer (LinkedIn, GitHub) to local proxies.
- Replacing external project links in the work section.
