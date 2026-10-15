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

const form = document.querySelector("form[data-staging-demo]");
if (form) {
  let started = false;
  form.addEventListener("input", () => { if (!started) { started = true; track("request_start", { source_path: location.pathname }); } }, { once: true });
  form.addEventListener("submit", event => {
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
    summary.hidden = true;
    form.hidden = true;
    const receipt = document.querySelector("#demo-receipt");
    receipt.hidden = false;
    receipt.focus();
    track("request_demo_complete", { transmitted: false });
  });
  document.querySelector("[data-reset-form]")?.addEventListener("click", () => {
    document.querySelector("#demo-receipt").hidden = true;
    form.hidden = false;
    form.querySelector("input,select,textarea")?.focus();
  });
}
