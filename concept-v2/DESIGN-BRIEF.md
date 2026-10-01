# Professional Appliance Repair — concept 2

This is a second, independent design concept at `/concept-v2/`. It preserves the existing prototype at the repository root for comparison. The attached *Website Design Concept Prompt 2* supplied the design method; known company facts came from the [current business website](https://proappliancefix.com/) and its [contact page](https://proappliancefix.com/contact/).

## 0. Gaps and assumptions

- Buyer profile is inferred: a homeowner with an appliance problem, usually making the first contact on a phone. No customer interviews or analytics were supplied.
- The business's existing web logo shows blue and green cues. No editable, approved logo asset was supplied for this concept, so the page uses a text wordmark rather than inventing a replacement logo.
- The business has a real request form and call/text numbers, but no blank work order or intake slip was supplied. The “Service call note” is an original visual adaptation of the information a customer needs for that real contact path, not a reproduction of an actual company document.
- Budget and production platform are unknown. This is a static, self-contained GitHub Pages concept.

## 1. Customer signal sheet

| Signal | Working profile |
| --- | --- |
| Decision speed | Hours or days after a household appliance fails |
| Stakes | Moderate: money, time, food or laundry disruption |
| Decision maker | Homeowner or household member, sometimes consulting family |
| Device and setting | Likely phone at home, possibly standing by the failed appliance |
| Trust needs | Local fit, actual contact details, service scope, visit-cost clarity |
| Emotional state | Frustrated and skeptical of vague repair promises |
| Expertise | Knows the symptom, may not know the model or repair jargon |
| Primary action | Call the office; text and current request form are alternatives |
| Time on page | Seconds to locate contact, minutes to check fit |
| Local tone | Direct and unshowy; name New Orleans area communities plainly |

Landing question: “Can this local business handle my appliance, come to my address, and explain the visit before I commit?”

## 2. Landscape scan

These sites appeared in sampled New Orleans area searches on September 30, 2026. Search appearance is not measured rank, revenue, or conversion performance.

| Site | Useful principle | Generic pattern to avoid |
| --- | --- | --- |
| [Jefferson Appliance](https://www.jeffersonappliance.com/) | Phone, place, and appliance scope are immediate | Dense brand and appliance lists without a fast scan path |
| [Trusted Handz](https://www.trustedhandznola.com/) | Direct booking and clear appliance choices | Broad “fast/quality/expert” claims without specific proof |
| [Nola Appliance Repair](https://www.nolaappliance.com/) | Online scheduling and local coverage | Long, crowded navigation and sweeping copy |
| [Bonvillian Appliance](https://bonvillianappliance.com/about/) | Real family history can make a service business specific | A history-led story would slow this buyer's immediate task |
| [Keefe’s electrical repair](https://www.keefes.com/electrician/repair/) | Local housing context and plain diagnostic language | Multiple offers competing with the main action |
| [KMG Plumbing](https://kmgplumbingnola.com/) | Named owner and direct call path ground trust | Emergency and response claims cannot be borrowed |

Use: visible call path, plain service index, local coverage, what to ask about price. Avoid: invented urgency, unsupported guarantees, generic icon cards, borrowed wording or visuals.

## 3. One-screen design direction

| Choice | Direction and customer reason |
| --- | --- |
| Density | Sparse first screen, then scannable details; a stressed caller needs contact before a long read. |
| Temperature | Warm-neutral language with crisp layout; personal but not sentimental. |
| Formality | Neutral; competent without luxury theater. |
| Energy | Calm; a broken appliance already creates urgency. |
| Voice | “We” for a real family-owned team; no fictional founder voice. |
| Ornament | Restrained rules and one intake-note motif; each mark carries information. |
| Archetype | Single-task funnel. The service index is a supporting component. Runner-up: reassurance guide, rejected because it would delay the call path. |
| Creative constraint | No photography. The first screen loads from type and CSS, and no simulated staff imagery stands in for proof. |
| Typography | Avenir Next for plain, sturdy reading; system mono for short intake labels. Both fit a practical service note. Fallbacks use native system fonts. |
| Color | Blue and green cues from the existing brand, with pale blue paper as a neutral. Deep blue `#19365d`, action blue `#1d4c90`, accent green `#a9d568`. No brass/teal palette from concept 1. |
| Contrast | Deep blue on white **12.16:1**; white on action blue **8.44:1**; muted text on pale paper **5.91:1**; deep blue on green **7.18:1**. |
| Signature | “Service call note,” adapted from the business's real contact path. The preparation note in the hero becomes a compact call/text/request routing note at the end. |

## 4. Structure from the decision path

1. **Can you help?** H1 names appliance repair and New Orleans; call and text appear in the first screen.
2. **Is it my appliance?** A ruled service index links to existing service pages.
3. **Do you come here?** A dark-blue band names communities listed by the current business site.
4. **What happens next?** An open, three-row explanation replaces numbered cards.
5. **What should I ask?** Visit details and native FAQ disclosures cover cost and coverage questions without invented amounts.
6. **How do I reach you?** The second service-call note provides verified phone, text, and current form routes.

Adjacent sections change composition: split opening, ruled index, inverted location band, two-column visit explanation, green information strip, FAQ split, and final routing note.

## 5–6. Build and self-check

The concept uses one H1, semantic links, native FAQ disclosures, visible focus outlines, mobile call/text actions with 48-pixel tap targets, and no large image on the first screen. It retains `noindex` while it is a concept.

The previous concept failed this prompt's **repeat** and **template** tests for this new brief: editorial serif, dark navy/teal/brass, generated staff scenes, and repeated card sections. This concept changes the archetype, type, palette, imagery policy, and page rhythm. The previous prototype's unconfirmed dollar amount, detailed warranty terms, and ZIP checker failed the **truth** test for this brief; they are omitted here. The **swap** test drove the local communities, verified numbers, and intake-note motif. The **thumb** test drove the persistent mobile call/text bar. The **voice** test removed abstract luxury language. The **squint** test keeps the H1 and call action dominant.

## 7. Delivery notes

**Rationale (under 150 words).** A homeowner with a failed appliance needs a direct route to a person and enough detail to decide whether to call. The first screen names the service and place, then offers call and text without a large photo. The service index and area band answer fit before the visitor reaches the visit explanation. The repeated service-call note turns the real contact route into a distinctive visual device while helping someone gather useful details. Blue and green acknowledge the current brand. The page avoids unsupported prices, fake team photos, and promises about speed or results.

**Client facts or assets needed before production:** approved logo files; any approved real staff/service photography if desired; exact diagnostic and travel fees; current ZIP-level coverage; warranty language; customer evidence or permission to use named reviews; confirmation that copy accurately describes scheduling and authorization practices.

**Search outline:** Title: “Appliance Repair in New Orleans & Metairie | Professional Appliance Repair.” H1: “Appliance repair in New Orleans and nearby communities.” H2s: “Start with the appliance”; “A local team for local homes”; “A clear conversation before a service visit”; “Ask the things that matter”; “Tell us what needs attention.”

**Previous-concepts log:** Professional Appliance Repair concept 2 — single-task funnel; Avenir Next + system mono; blue, pale paper, green; service-call note.
