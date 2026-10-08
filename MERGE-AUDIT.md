# Unified website merge audit

## Revised decision

After review of https://professional-appliance-repair-preview-ry.netlify.app/, that build is the strongest primary foundation.

The current `codex/unified-site` implementation is an interim repository-native consolidation created before the Netlify build was supplied. It remains useful as a verified-facts, sitemap and component reference, but it should not replace the Netlify design system.

## Final direction

- Start from the Netlify source.
- Add verified owner data from `business-config.json`.
- Add the repository ZIP checker, separate appliance URLs, FAQ depth and mobile call dock.
- Preserve current production URLs with redirects.
- Do not publish preview-only claims until the owner confirms them.

See [CONCEPT-COMPARISON.md](CONCEPT-COMPARISON.md).

## Required source

Provide the repository or source ZIP used to deploy the Netlify preview. The deployed pages can be audited publicly, but the maintainable source is required for a clean merge.
