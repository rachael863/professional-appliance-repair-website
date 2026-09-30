# Professional Appliance Repair website source

This repository contains the complete source of the **one-page, interactive website prototype** for Professional Appliance Repair in Greater New Orleans. The page's illustrations and icons are CSS and inline SVG, so no external image files or image services are required.

## Files

- `index.html` — all website sections and form markup
- `assets/site.css` — responsive layout and artwork
- `assets/site.js` — menu, ZIP checker, request-form prototype, and dialog interactions
- `assets/favicon.svg` — site icon
- `business-config.json` — business details and items requiring confirmation
- `server.mjs` and `package.json` — dependency-free local preview
- `DEPLOYMENT.md` — static hosting instructions
- `.nojekyll` — GitHub Pages compatibility

## Preview locally

Install Node.js 18 or newer, then run:

```sh
npm run dev
```

Open http://localhost:4173. There is no install step and no build step.

## Current scope

This is a **prototype**, not a live booking system. The request form validates and displays a success state in the browser, but sends and stores no information. Connect an approved secure intake endpoint, finish privacy and consent text, and test delivery before accepting customer requests.

The page intentionally identifies review examples and operational standards that still need owner approval. Confirm the ZIP-specific travel fees and all business claims before public launch. See `business-config.json` and `DEPLOYMENT.md`.
