# Concept comparison — 2026-10-08

## Complete version inventory

1. Current production baseline: https://proappliancefix.com/
2. Repository Concept 1: editorial/photo-led root site.
3. Repository Concept 2: phone-first service path at `/concept-v2/`.
4. Repository photo-page system: appliance landing pages at `/concept-v2/photo-pages/`.
5. Netlify advanced prototype: https://professional-appliance-repair-preview-ry.netlify.app/
6. Base, enhanced and archived image iterations plus design documents. These are supporting assets, not separate sites.
7. The referenced Sites project did not contain a usable deployed version when previously inspected.

## Ranking

The Netlify prototype is the strongest overall foundation. It has the best combination of field-service proof, symptom-led navigation, fee-first positioning, appliance landing pages, property-manager segmentation, booking flow and technical performance.

Editorial scores below are comparative judgments, not conversion results.

| Version | Trust | Conversion | Page depth | Local/SEO foundation | Mobile | Maintainability |
|---|---:|---:|---:|---:|---:|---:|
| Netlify prototype | 5 | 5 | 5 | 4 | 5 | 4 |
| Repository photo pages | 4 | 4 | 4 | 4 | 4 | 3 |
| Concept 1 | 4 | 4 | 2 | 2 | 4 | 4 |
| Concept 2 | 3 | 5 | 2 | 2 | 5 | 5 |
| Current production | 3 | 3 | 4 | 4 | 3 | 3 |

## Measured Netlify findings

Mobile Lighthouse on 2026-10-08: Performance 100, Accessibility 96, Best Practices 100, FCP 1.1 s, LCP 1.3 s, TBT 0 ms and CLS 0. The automated accessibility failure was color contrast. A rendered audit also reported no structured data and at least one image-alt issue.

## Highest-value combination

- **Base:** Netlify visual system, homepage, authentic field-work treatment, booking flow, property-manager path and responsive-image implementation.
- **Concept 1 additions:** warmer New Orleans homeowner voice, ZIP checker, fuller FAQ, fee/warranty explanation and premium editorial pacing.
- **Concept 2 additions:** persistent phone-first mobile actions and low-maintenance navigation/component behavior.
- **Photo-page additions:** separate refrigerator, washer, dryer, dishwasher, oven/range and ice-machine URLs; related services; appliance FAQs.
- **Current-site preservation:** redirect existing URLs; retain verified brand, staff/history, testimonials, Facebook, BBB and payment-portal material where current.
- **Owner facts:** use `business-config.json` as the controlling source for phone, hours, ZIPs, $129 starting fee, warranty, credentials and specialty brands.

## Best page sources

| Final page | Starting point |
|---|---|
| Homepage | Netlify homepage, plus owner-confirmed fee, ZIP checker and expanded FAQ |
| Refrigerator | Netlify refrigerator page |
| Washer | Split the Netlify laundry page into washer-specific intent |
| Dryer | Split the Netlify laundry page into dryer-specific intent |
| Oven/range/cooktop | Netlify cooking-appliance page |
| Dishwasher | Netlify dishwasher page |
| Ice machines | Netlify page only after commercial scope and $165 fee are verified; otherwise use the repository residential page |
| Property managers | Netlify property-manager page |
| Brands | Netlify selector plus owner-confirmed uncommon brands and current-site legacy list |
| Service area | Repository ZIP tool plus Netlify local-page framework |
| Fees/warranty | Unified repository page using owner-confirmed wording |
| Reviews | Verified current sources with direct profile links |

## Preview claims that require owner confirmation

These appear in the Netlify prototype but were not supplied in this conversation:

- Marvel, U-Line and Zephyr manufacturer authorization;
- general-liability and workers-compensation insurance;
- the service-call fee being credited to an approved repair;
- a $165 ice-machine diagnostic fee;
- commercial ice-machine scope and eligible customer types;
- same-day/next-business-day scheduling and no-emergency-service language;
- uniformed-technician and written-estimate promises.

## Production actions

1. Obtain the source repository or ZIP used for the Netlify deployment.
2. Verify the claims above.
3. Connect an approved booking/CRM endpoint.
4. Add direct Google and Facebook profile URLs.
5. Approve photo rights/captions.
6. Add LocalBusiness and Service structured data.
7. Correct contrast and image-alt issues.
8. Map legacy WordPress URLs to redirects.
9. Keep thin city pages noindex until each has unique local proof.
