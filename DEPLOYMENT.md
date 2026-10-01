# Deployment

The website is static and requires no build command. Publish the repository root on GitHub Pages, Netlify, Cloudflare Pages, or another static host.

## GitHub Pages

In the repository, open **Settings → Pages**. Choose **Deploy from a branch**, then `main` and `/(root)`. Keep `.nojekyll` in the repository.

## Netlify or Cloudflare Pages

Connect the repository or upload its contents. Leave the build command empty and set the publish directory to the repository root.

## Before a production launch

1. Decide whether the new site will use the company's existing request form or an approved replacement, then test lead delivery. The current prototype links to the existing contact page.
2. Verify phone, hours, service ZIP codes, diagnostic and travel fees, warranty terms, and certifications against current business records.
3. Add approved customer reviews only with exact source links and permissions. The prototype does not display reviews.
4. Publish reviewed privacy, accessibility, and service terms on the production domain.
5. Test the site on mobile and desktop, including keyboard navigation and form submission.
6. Remove the `noindex` directive from `index.html` only after production launch planning and domain migration are complete.

This source package is complete for the current one-page prototype. No external images, fonts, libraries, or APIs are required to display it. The online-request link leads to the existing business website.
