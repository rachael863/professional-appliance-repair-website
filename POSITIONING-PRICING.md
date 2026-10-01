# Positioning and pricing recommendation

Research date: September 30, 2026. This document informs the public design concept at `concept-v2/`. The public prototype contains no unverified dollar amount and retains `noindex`.

## Recommended position

**Family-owned New Orleans-area appliance repair that explains the problem and the price before a homeowner decides on the work.**

The distinctive promise is an informed decision, expressed through a service-record visual system and plain-language copy. The primary buyer is a homeowner dealing with a failed kitchen or laundry appliance, likely on a phone. The brand should feel attentive and capable, not theatrical or luxury-coded. The site should lead with service and location, then show appliance fit, pricing steps, the process, and contact. The current business site supports family ownership in Metairie, the service communities, and the published practice of explaining estimates before repair work.

### Messaging hierarchy

1. **Core message:** Appliance repair in New Orleans, handled with care.
2. **Proof of local fit:** Metairie-based family business; New Orleans, Metairie, Kenner, Harahan and River Ridge listed by the business.
3. **Proof of clarity:** The business's staff page says technicians explain findings, costs, and options before work and perform no work that was not requested.
4. **Next action:** Call the office with appliance, model, symptoms and service ZIP; text and the existing request form remain alternatives.

Avoid unsupported claims about arrival times, shoe covers, completed repair rates, “best” status, and warranty length. Use actual staff/service photography only after the business confirms rights and context. Do not present generated staff scenes as company personnel.

## Observed price presentation

These are **published examples**, not a statistically representative market survey or proof of quality, ranking or conversion:

| Company | What its own page publishes | Design lesson |
| --- | --- | --- |
| [Nola Appliance Repair](https://www.nolaappliance.com/properties) | $99.99 diagnostic when no repair; describes no service fee with repair. | Clearly state whether the visit fee is credited or waived. |
| [Joseph Industries](https://josephindustries.site/diagnostic) | $79 standard diagnostic; $119 emergency/long-distance. | Location and urgency can change the visit fee; disclose conditions. |
| [Mr. Appliance of Greater Atlanta](https://www.mrappliance.com/greater-atlanta/) | $149 weekday diagnostic; $160 weekend; $75 additional diagnostic. | A higher visit fee can be presented with a precise included scope and an estimate before work. |
| [Mr. Appliance of Durham](https://www.mrappliance.com/durham/) | $99 diagnostic, then a flat-rate repair quote. | Separate the diagnostic visit from the repair decision. |
| [Professional Appliance Repair staff page](https://proappliancefix.com/our-staff/) | Says technicians explain each estimate and do no unrequested work. No verified public diagnostic amount found. | Lead with the business's own decision process; do not invent a fee. |

The repository's earlier `business-config.json` contains a **provisional, unconfirmed** $129 starting charge and warranty details. Those values must not be presented as current policy based only on the prototype file.

## Recommended pricing architecture

Use **two stages**, with one clearly described visit charge and a repair estimate after inspection:

1. **Before booking:** The office confirms appliance and service ZIP, the diagnostic visit charge, applicable tax and any address-based travel charge. If there are different charges for additional appliances, unusual models or long-distance calls, describe those conditions plainly.
2. **After diagnosis:** The technician explains the issue and repair estimate, including parts and labor as applicable. The customer chooses whether to authorize work. This stage is supported by the business's own staff page.
3. **Credit policy:** Say whether the diagnostic charge is credited toward an approved repair **only after owner confirmation**. If it is, state the amount, eligibility and timing. If it is not, say so clearly. Avoid a “free estimate” or “$0 service call” headline unless the entire policy supports it.

**Website display rule:** Publish an exact standard diagnostic amount only when the owner supplies the current schedule and included scope. If travel/ZIP conditions affect the total, show either an accurate zone table or a prominent “confirm your visit total before booking” prompt. Never invent a universal repair price from symptom alone.

**Internal price-setting rule:** Set the visit charge from technician and dispatch time, travel, overhead, and target margin. Compare it with local published examples as a context check, not as the formula. The owner must approve the final number and credit treatment.

## Design application

`concept-v2/index.html` now uses the service record as a repeated information device: first-contact details in the hero and a pricing record beside the two-stage explanation. The layout uses a warm paper ground, restrained blue-green brand cues, a serif heading voice, fine rules and a list-based service index. This is a custom composition built around how this business receives requests. There are no fake reviews, generic icon cards, invented technicians, or unsupported dollar amounts.

## Owner decisions before production

- Approve the current standard diagnostic amount, included work and any additional-appliance charge.
- Confirm address or ZIP-based travel charges and how they are disclosed.
- Confirm whether any diagnostic amount is credited toward an approved repair.
- Approve the exact wording describing repair estimates and authorization.
- Confirm brand assets, actual staff/service image rights, and any named customer-story permissions.
- Confirm production platform and lead-form route before replacing the current domain.
