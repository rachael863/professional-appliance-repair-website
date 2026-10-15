import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const site = join(root, "site");
const routes = ["", "services", "services/refrigerator-repair", "services/washer-repair", "services/dryer-repair", "services/dishwasher-repair", "services/oven-range-repair", "services/ice-machine-repair", "brands", "service-areas", "property-managers", "fees-warranty", "frequently-asked-questions", "request-service", "request-received", "privacy", "accessibility", "about", "service-request-terms"];

test("every approved review route exists with core metadata", async () => {
  for (const route of routes) {
    const html = await readFile(join(site, route, "index.html"), "utf8");
    assert.match(html, /<h1(?:\s[^>]*)?>/, route);
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

test("request form is Netlify-detectable and confirms only an accepted request", async () => {
  const html = await readFile(join(site, "request-service", "index.html"), "utf8");
  assert.match(html, /name="service-request"/);
  assert.match(html, /data-netlify="true"/);
  assert.match(html, /action="\/request-received\/"/);
  assert.match(html, /netlify-honeypot="company"/);
  assert.match(html, /novalidate/);
  assert.match(html, /aria-labelledby="request-title"/);
  assert.match(html, /site\.js\?v=par12-rc3/);
  assert.match(html, /site\.css\?v=par12-rc3/);
  assert.match(html, /class="wide check"><input[^>]+><span>/);
  const js = await readFile(join(site, "assets", "site.js"), "utf8");
  assert.match(js, /event\.preventDefault\(\)/);
  assert.match(js, /fetch\("\/"/);
  assert.match(js, /request_submit_success/);
  assert.match(js, /appointment_confirmed: false/);
  assert.doesNotMatch(js, /booking_completion/);
});

test("owner-confirmed identity, hours, email, ZIPs and production origin are rendered", async () => {
  const home = await readFile(join(site, "index.html"), "utf8");
  assert.match(home, /proappliancerepairllc@gmail\.com/);
  assert.match(home, /Monday–Friday, 8:00 AM–4:30 PM Central/);
  assert.match(home, /https:\/\/proappliancefix\.com\//);
  const areas = await readFile(join(site, "service-areas", "index.html"), "utf8");
  for (const zip of ["70001", "70037", "70075", "70092", "70094", "70112", "70121", "70130", "70170"]) assert.match(areas, new RegExp(zip));
  assert.match(areas, /outside PAR's standard service area and must be reviewed by the office/);
});

test("signed 39-ZIP fee schedule is complete and powers an accessible lookup", async () => {
  const config = JSON.parse(await readFile(join(root, "business-config.json"), "utf8"));
  assert.equal(config.serviceZipCodes.length, 39);
  assert.equal(Object.keys(config.feeSchedule.byZip).length, 39);
  assert.deepEqual(Object.keys(config.feeSchedule.byZip).sort(), [...config.serviceZipCodes].sort());
  assert.equal(config.feeSchedule.byZip["70001"], 125);
  assert.equal(config.feeSchedule.byZip["70053"], 135);
  assert.equal(config.feeSchedule.byZip["70037"], 145);
  assert.equal(config.feeSchedule.taxTreatment, "Fees are shown before tax; applicable tax is added.");
  assert.equal(config.feeSchedule.parkingRule, "Parking costs are added to the service-call fee if incurred.");
  for (const route of ["service-areas", "fees-warranty", "request-service"]) {
    const html = await readFile(join(site, route, "index.html"), "utf8");
    assert.match(html, /data-fee-lookup/, route);
    assert.match(html, /data-fee-result/, route);
    assert.match(html, /&quot;70094&quot;:145/, route);
  }
  const js = await readFile(join(site, "assets", "site.js"), "utf8");
  assert.match(js, /Object\.hasOwn\(fees, zip\)/);
  assert.match(js, /office-review/);
});

test("required assets and platform controls exist", async () => {
  for (const file of ["assets/site.css", "assets/site.js", "assets/professional-appliance-repair-header.svg", "_redirects", "_headers", "sitemap.xml", "404.html"]) await access(join(site, file));
});

test("unsupported authority and review claims are absent", async () => {
  for (const route of routes) {
    const html = await readFile(join(site, route, "index.html"), "utf8");
    assert.doesNotMatch(html, /factory authorized|five[- ]star|best appliance|guaranteed response|starting at \$|50\+ years|more than 50 years/i, route);
    assert.doesNotMatch(html, /do not add|do not publish|accept credit cards/i, route);
  }
});

test("services index and image evidence are mapped safely", async () => {
  const home = await readFile(join(site, "index.html"), "utf8");
  assert.match(home, /href="\/services\/">Appliances<\/a>/);
  const redirects = await readFile(join(site, "_redirects"), "utf8");
  assert.match(redirects, /\/services\.html \/services\/ 301!/);
  const refrigerator = await readFile(join(site, "services", "refrigerator-repair", "index.html"), "utf8");
  const ice = await readFile(join(site, "services", "ice-machine-repair", "index.html"), "utf8");
  assert.doesNotMatch(refrigerator, /par-stacked-dryer/);
  assert.doesNotMatch(ice, /par-wall-oven/);
  assert.match(refrigerator, /Photo intentionally omitted/);
  assert.match(ice, /Photo intentionally omitted/);
});

test("internal links resolve and pages keep one primary heading with useful image text", async () => {
  for (const route of routes) {
    const html = await readFile(join(site, route, "index.html"), "utf8");
    assert.equal((html.match(/<h1(?:\s[^>]*)?>/g) || []).length, 1, `${route}: one h1`);
    for (const match of html.matchAll(/<img[^>]+alt="([^"]*)"/g)) assert.ok(match[1].trim(), `${route}: non-empty image alt`);
    for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
      const pathname = match[1].split(/[?#]/)[0];
      if (pathname === "/") continue;
      const target = pathname.endsWith("/") ? join(site, pathname, "index.html") : join(site, pathname);
      await access(target);
    }
  }
});
