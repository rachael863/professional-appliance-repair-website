import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const site = join(root, "site");
const routes = ["", "services/refrigerator-repair", "services/washer-repair", "services/dryer-repair", "services/dishwasher-repair", "services/oven-range-repair", "services/ice-machine-repair", "brands", "service-areas", "property-managers", "fees-warranty", "frequently-asked-questions", "request-service", "request-received", "privacy", "accessibility", "about"];

test("every approved review route exists with core metadata", async () => {
  for (const route of routes) {
    const html = await readFile(join(site, route, "index.html"), "utf8");
    assert.match(html, /<h1>/, route);
    assert.match(html, /<title>.+<\/title>/, route);
    assert.match(html, /<meta name="description"/, route);
    assert.match(html, /<link rel="canonical"/, route);
    assert.match(html, /<meta name="robots" content="noindex,nofollow">/, route);
  }
});

test("staging indexing controls exist", async () => {
  assert.equal(await readFile(join(site, "robots.txt"), "utf8"), "User-agent: *\nDisallow: /\n");
  assert.match(await readFile(join(site, "_headers"), "utf8"), /X-Robots-Tag: noindex, nofollow/);
});

test("request form is Netlify-detectable but browser transmission is disabled", async () => {
  const html = await readFile(join(site, "request-service", "index.html"), "utf8");
  assert.match(html, /name="service-request"/);
  assert.match(html, /data-netlify="true"/);
  assert.match(html, /action="\/request-received\/"/);
  assert.match(html, /netlify-honeypot="company"/);
  const js = await readFile(join(site, "assets", "site.js"), "utf8");
  assert.match(js, /event\.preventDefault\(\)/);
  assert.doesNotMatch(js, /request_submit_success|booking_completion|fetch\(/);
  assert.match(js, /request_demo_complete/);
});

test("required assets and platform controls exist", async () => {
  for (const file of ["assets/site.css", "assets/site.js", "assets/professional-appliance-repair-header.svg", "_redirects", "_headers", "sitemap.xml", "404.html"]) await access(join(site, file));
});

test("unsupported authority and review claims are absent", async () => {
  for (const route of routes) {
    const html = await readFile(join(site, route, "index.html"), "utf8");
    assert.doesNotMatch(html, /factory authorized|five[- ]star|best appliance|guaranteed response|starting at \$/i, route);
  }
});
