document.addEventListener("DOMContentLoaded", () => {
  const tabs = {
    Inventory: document.getElementById("Inventory"),
    Orders: document.getElementById("Orders"),
    Suppliers: document.getElementById("Suppliers"),
  };

  document.getElementById("btnInventory").addEventListener("click", () => {
    showTab("Inventory");
  });
  document.getElementById("btnOrders").addEventListener("click", () => {
    showTab("Orders");
  });
  document.getElementById("btnSuppliers").addEventListener("click", () => {
    showTab("Suppliers");
  });

  function showTab(tabName) {
    Object.values(tabs).forEach((tab) => tab.classList.add("hidden"));
    tabs[tabName].classList.remove("hidden");
  }

  showTab("Inventory");
});

document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".tab-btns");
  const tabContent = [
    document.getElementById("Materials"),
    document.getElementById("Cafeteria"),
  ];

  if (!tabBtns.length) return;

  tabBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      // Reset all tabs to inactive (white/gray)
      tabBtns.forEach((b) => {
        b.classList.remove(
          "bg-emerald-600",
          "text-white",
          "border-emerald-600",
          "shadow"
        );
        b.classList.add(
          "bg-white",
          "text-gray-700",
          "border",
          "border-gray-200"
        );
      });

      // Activate clicked tab: stronger emerald + white text + subtle shadow
      btn.classList.remove("bg-white", "text-gray-700", "border-gray-200");
      btn.classList.add(
        "bg-emerald-600",
        "text-white",
        "border-emerald-600",
        "shadow"
      );

      // Hide all tab contents, then show selected
      tabContent.forEach((content) => {
        if (content) content.classList.add("hidden");
      });
      if (tabContent[idx]) tabContent[idx].classList.remove("hidden");
    });
  });

  // Set default active tab once (first tab)
  tabBtns[0].click();
});
