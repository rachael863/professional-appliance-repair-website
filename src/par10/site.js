const queue = window.dataLayer = window.dataLayer || [];
const track = (event, detail = {}) => queue.push({ event, ...detail });

document.querySelectorAll('[data-analytics="phone_click"]').forEach(link => link.addEventListener("click", () => track("phone_click", { location: link.closest("header,footer,.mobile-actions")?.tagName.toLowerCase() || "content" })));
document.querySelectorAll("[data-request-start]").forEach(link => link.addEventListener("click", () => track("request_start", { source_path: location.pathname })));

const menu = document.querySelector(".menu-button");
const nav = document.querySelector("#site-nav");
menu?.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("open", open);
});

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 });
document.querySelectorAll("[data-fee-lookup]").forEach(lookup => {
  const input = lookup.querySelector("[data-fee-zip]");
  const result = lookup.querySelector("[data-fee-result]");
  const button = lookup.querySelector("[data-fee-check]");
  let fees = {};
  try { fees = JSON.parse(lookup.dataset.fees || "{}"); } catch { fees = {}; }
  const show = () => {
    const zip = input.value.replace(/\D/g, "").slice(0, 5);
    input.value = zip;
    if (zip.length !== 5) {
      result.textContent = "Enter a complete five-digit ZIP.";
      return;
    }
    if (Object.hasOwn(fees, zip)) {
      result.textContent = `Service-call fee for ${zip}: ${money.format(fees[zip])}. ${lookup.dataset.tax} ${lookup.dataset.parking}`;
      result.dataset.coverage = "listed";
    } else {
      result.textContent = `${lookup.dataset.fallback} You may submit a request for office review; it is not accepted or scheduled unless the office confirms coverage, a date, and an arrival window.`;
      result.dataset.coverage = "office-review";
    }
  };
  input.addEventListener("input", () => { if (input.value.replace(/\D/g, "").length >= 5) show(); });
  input.addEventListener("blur", show);
  button?.addEventListener("click", show);
});

const form = document.querySelector("form[data-release-intake]");
if (form) {
  let started = false;
  form.addEventListener("input", () => { if (!started) { started = true; track("request_start", { source_path: location.pathname }); } }, { once: true });
  form.addEventListener("submit", async event => {
    event.preventDefault();
    form.querySelectorAll(".field-error").forEach(el => { el.classList.remove("field-error"); el.removeAttribute("aria-invalid"); });
    const invalid = [...form.elements].filter(el => el.willValidate && !el.checkValidity());
    const summary = document.querySelector("#form-errors");
    if (invalid.length) {
      invalid.forEach(el => { el.classList.add("field-error"); el.setAttribute("aria-invalid", "true"); });
      summary.hidden = false;
      summary.textContent = `Please review ${invalid.length} required ${invalid.length === 1 ? "field" : "fields"}.`;
      summary.focus();
      return;
    }
    const button = form.querySelector('[type="submit"]');
    summary.hidden = true;
    button.disabled = true;
    button.textContent = "Sending…";
    try {
      const body = new URLSearchParams(new FormData(form));
      const response = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      form.hidden = true;
      const receipt = document.querySelector("#request-receipt");
      receipt.hidden = false;
      receipt.focus();
      track("request_submit_success", { accepted_for: "office_review", appointment_confirmed: false });
    } catch {
      summary.hidden = false;
      summary.textContent = "The request was not confirmed as received. Your entries are still here. Retry, call, or email the office.";
      summary.focus();
    } finally {
      button.disabled = false;
      button.textContent = "Send service request";
    }
  });
}
