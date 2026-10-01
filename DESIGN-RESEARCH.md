# Evidence-led design revision

Research date: September 30, 2026. This is a design benchmark, not a ranking or conversion study. We sampled search results for home-service queries in Chicago, Dallas, Phoenix, and Atlanta, then inspected the companies' own pages. Search order varies by location, device, and time. Appearance in these results does not prove revenue, lead volume, or a durable Google ranking.

| Market and sampled site | Observable pattern | Applied to this prototype |
| --- | --- | --- |
| Chicago appliance repair — [Midwest Appliance Repair](https://www.midwestappliancerepairs.com/) | Appliance and location appear in the main heading; phone, booking link, diagnostic fee, service categories, and coverage are easy to find. | Replaced the vague hero with service and geography; put call, online request, and fee context above the fold. |
| Phoenix plumbing — [HQ Plumbing & Air](https://hqplumbingandair.com/) | Immediate call and schedule paths; local service-area detail and customer questions are visible on the page. | Added clear call/text paths, kept a ZIP checker, and revised the FAQs around booking decisions. |
| Dallas HVAC — [Jade Air](https://jadeair.net/) | The page states its service area and phone, then provides a direct service request path. | Made the local area and contact choices explicit; connected online requests to the business's current contact form. |
| Atlanta electrical — [Flankers Electric](https://www.flankerselectric.com/services) | Service descriptions are specific enough to help a visitor choose; the page closes with a clear booking action and warranty information. | Kept specific symptom descriptions visible on mobile, linked categories to the company's existing service pages, and summarized what to confirm before a visit. |

## Independent guidance

- [Google Search Essentials](https://developers.google.com/search/docs/essentials) recommends helpful content, descriptive titles and headings, and crawlable links. The prototype now has a descriptive title and heading and real links to service pages.
- [Google's people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) favors original, trustworthy information over mass-produced pages. We did not create thin location or appliance pages with interchangeable copy.
- [Google's Core Web Vitals guidance](https://web.dev/articles/defining-core-web-vitals-thresholds) identifies load speed, responsiveness, and layout stability as important user-experience measures. The prototype still uses no external fonts, scripts, or images; field performance was not measured here.

## Business facts and boundaries

The company's [current website](https://proappliancefix.com/) identifies it as a family-owned New Orleans-area appliance repair business and publishes its call number, text number, hours, and service categories. Its [contact page](https://proappliancefix.com/contact/) has an existing request form. The prototype sends online requests there and does not accept personal information itself.

The $129 starting diagnostic fee, travel-charge rules, service ZIPs, and warranty wording came from the prior prototype's business configuration and still need owner confirmation. No competitor's same-day promises, review ratings, guarantee language, or photographs were copied into this design. The public GitHub Pages prototype remains marked `noindex` while the current business site is active.

## Changes to review before production

1. Confirm the precise diagnostic fee, tax treatment, travel charge by ZIP, and coverage terms.
2. Confirm whether to keep the existing contact form or replace it with an approved secure intake flow.
3. Replace illustrative artwork with approved company photography if available.
4. Move the design to the approved business domain, remove `noindex`, and test page performance and lead delivery there.
