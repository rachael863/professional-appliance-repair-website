# Professional Appliance Repair website source

This repository contains the complete source of the **one-page website prototype** for Professional Appliance Repair in Greater New Orleans. All imagery is hosted in the repository; the page has no external image dependency.

## Files

- `index.html` — all website sections, contact links, and ZIP checker markup
- `assets/site.css` — responsive layout and artwork
- `assets/site.js` — mobile menu and browser-only ZIP checker
- `assets/favicon.svg` — site icon
- `assets/new-orleans-appliance-service.jpg` and `assets/washer-consultation.jpg` — generated concept photography, depicting no actual staff or customers
- `BRAND-CONCEPT.md` — visual and copy direction for the premium, family-owned concept
- `business-config.json` — business details and items requiring confirmation
- `server.mjs` and `package.json` — dependency-free local preview
- `DEPLOYMENT.md` — static hosting instructions
- `DESIGN-RESEARCH.md` — sampled home-service website patterns, sources, and changes
- `.nojekyll` — GitHub Pages compatibility

## Preview locally

Install Node.js 18 or newer, then run:

```sh
npm run dev
```

Open http://localhost:4173. There is no install step and no build step.

## Current scope

This is a **design prototype** on GitHub Pages. Its call and text links use the phone numbers on the existing Professional Appliance Repair website. Its online-request link opens that site's current contact page. The prototype itself collects or stores no service-request information.

The prototype has a `noindex` directive to avoid competing with the current business website in search. Remove it only when moving the design to the approved production domain. Confirm the ZIP-specific travel fees, service policies, and all business claims before that move. See `business-config.json` and `DEPLOYMENT.md`.
