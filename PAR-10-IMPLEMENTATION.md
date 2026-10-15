# PAR-10 implementation notes

This branch implements the PAR-09 system as a dependency-free static staging build in `site/`.

- Build: `npm run build:par10`
- Test: `npm run test:par10`
- Full verification: `npm run verify:par10`
- Netlify publish directory: `site`

The review form keeps the existing `service-request` Netlify form contract and success route, but client-side staging code deliberately prevents network transmission. It exercises required-field validation and a distinct demonstration receipt without sending a customer message. Remove `data-staging-demo` and replace the demonstration handler only after form routing, privacy, retention, consent, and confirmation-event rules are owner-approved.

Every staging response is blocked from indexing using page metadata, `X-Robots-Tag`, and `robots.txt`. Canonicals point to the currently associated preview origin and must be changed to the owner-approved production origin before launch.
