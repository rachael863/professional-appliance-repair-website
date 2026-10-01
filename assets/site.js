(function () {
  const menuButton = document.getElementById("menuBtn");
  const navigation = document.getElementById("navLinks");

  menuButton.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
    });
  });

  const coveredZipCodes = new Set([
    "70001", "70002", "70003", "70004", "70005", "70006", "70032",
    "70043", "70053", "70054", "70055", "70056", "70057", "70058",
    "70062", "70065", "70072", "70114", "70115", "70116", "70117",
    "70118", "70119", "70122", "70123", "70124", "70131"
  ]);

  document.getElementById("zipForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const zip = document.getElementById("areaZip").value.trim();
    const status = document.getElementById("zipStatus");

    if (!/^[0-9]{5}$/.test(zip)) {
      status.textContent = "Enter a valid 5-digit ZIP code.";
      status.className = "status status-error";
      return;
    }

    if (coveredZipCodes.has(zip)) {
      status.textContent = zip + " is on the prototype's service-area list. Call 504-454-5040 to confirm current coverage and your total visit charge.";
      status.className = "status status-success";
    } else {
      status.textContent = zip + " is not on the prototype's service-area list. Call 504-454-5040 to ask about current coverage.";
      status.className = "status status-error";
    }
  });
})();
