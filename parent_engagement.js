document.addEventListener("DOMContentLoaded", () => {
  const tabs = {
    Announce: document.getElementById("Announce"),
    ParentMsg: document.getElementById("ParentMsg"),
    Engagement: document.getElementById("Engage"),
  };

  document.getElementById("btnAnnouncement").addEventListener("click", () => {
    showTab("Announce");
  });
  document.getElementById("btnParent").addEventListener("click", () => {
    showTab("ParentMsg");
  });
  document.getElementById("btnEngage").addEventListener("click", () => {
    showTab("Engagement");
  });

  function showTab(tabName) {
    Object.values(tabs).forEach((tab) => tab.classList.add("hidden"));
    tabs[tabName].classList.remove("hidden");
  }

  showTab("Announce");
});

document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = Array.from(document.querySelectorAll(".tab-btn"));
  const tabContent = [
    document.getElementById("Announce"),
    document.getElementById("ParentMsg"),
    document.getElementById("Engage"),
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
