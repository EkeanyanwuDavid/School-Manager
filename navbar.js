fetch("navbar.html")
  .then((res) => res.text())
  .then((data) => {
    const navbar = document.getElementById("navbar");
    navbar.innerHTML = data;

    // Render icons inside the injected navbar
    lucide.createIcons();

    // Dropdowns
    const dropdowns = navbar.querySelectorAll(".dropdown-btn");
    dropdowns.forEach((btn) => {
      const menu = btn.nextElementSibling;
      if (!menu) return;
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("hidden");
      });
    });

    document.addEventListener("click", () => {
      document
        .querySelectorAll(".dropdown-menu")
        .forEach((m) => m.classList.add("hidden"));
    });

    // Burger Menu
    const burger = navbar.querySelector("#mobileMenuButton");
    const mobileMenu = navbar.querySelector("#mobileMenu");
    if (burger && mobileMenu) {
      burger.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }

    // Now setup dark mode after ensuring the button exists
    setupDarkMode();
  })
  .catch((err) => console.error("Error loading navbar:", err));

function setupDarkMode() {
  const html = document.documentElement;
  const toggle = document.getElementById("themeToggle");

  if (!toggle) {
    console.warn("⚠️ No #themeToggle found yet. Retrying...");
    setTimeout(setupDarkMode, 200);
    return;
  }

  console.log("✅ Found theme toggle:", toggle);

  // Apply saved theme
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }

  const updateIcon = () => {
    const icon = toggle.querySelector("i");
    if (!icon) {
      console.warn("⚠️ No <i> icon inside toggle!");
      return;
    }
    const newIcon = html.classList.contains("dark") ? "sun" : "moon";
    console.log("🔄 Updating icon to:", newIcon);
    icon.setAttribute("data-lucide", newIcon);
    lucide.createIcons();
  };

  updateIcon();

  toggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
    updateIcon();
    console.log(
      "🌓 Theme toggled:",
      html.classList.contains("dark") ? "dark" : "light"
    );
  });
}
