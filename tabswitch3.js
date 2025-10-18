// Tab Switch
document.addEventListener("DOMContentLoaded", () => {
  const tabs = {
    Materials: document.getElementById("Materials"),
    Cafeteria: document.getElementById("Cafeteria"),
  };

  document.getElementById("btnEducational").addEventListener("click", () => {
    showTab("Materials");
  });
  document.getElementById("btnMaterials").addEventListener("click", () => {
    showTab("Cafeteria");
  });

  function showTab(tabName) {
    Object.values(tabs).forEach((tab) => tab.classList.add("hidden"));
    tabs[tabName].classList.remove("hidden");
  }

  showTab("Materials");
});

document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".tab-btns");
  const tabContent = [
    document.getElementById("Materials"),
    document.getElementById("Cafeteria"),
  ];

  tabBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => {
        b.classList.remove("bg-green-600", "text-white");
        b.classList.add("bg-gray-200", "text-gray-400");
      });

      btn.classList.add("bg-green-600", "text-gray-400");
      btn.classList.remove("bg-gray-200", "text-green-700");
      tabContent.forEach((content) => content.classList.add("hidden"));
      tabContent[idx].classList.remove("hidden");
    });
    tabBtns[0].click();
  });
});
