fetch("navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    // initialize lucide icons
    lucide.createIcons();

    // dropdown toggle
    const dropdowns = document.querySelectorAll(".dropdown-btn");
    dropdowns.forEach((btn) => {
      const menu = btn.nextElementSibling;
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("hidden");
      });
    });

    // close when clicking outside
    document.addEventListener("click", () => {
      document
        .querySelectorAll(".dropdown-menu")
        .forEach((menu) => menu.classList.add("hidden"));
    });

    // burger toggle
    const burger = document.getElementById("mobileMenuButton");
    const menu = document.getElementById("mobileMenu");
    if (burger && menu) {
      burger.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    }
  });
