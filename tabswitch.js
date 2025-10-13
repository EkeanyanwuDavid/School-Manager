// Tab switching logic (like attendance.html)
document.addEventListener("DOMContentLoaded", function () {
  const tabs = {
    overview: document.getElementById("overviewContent"),
    examSystems: document.getElementById("examSystemsContent"),
    registrations: document.getElementById("registrationsContent"),
    results: document.getElementById("resultsContent"),
  };

  document.getElementById("btnOverview").addEventListener("click", () => {
    showTab("overview");
  });
  document.getElementById("btnExamSystems").addEventListener("click", () => {
    showTab("examSystems");
  });
  document.getElementById("btnRegistrations").addEventListener("click", () => {
    showTab("registrations");
  });
  document.getElementById("btnResults").addEventListener("click", () => {
    showTab("results");
  });

  function showTab(tabName) {
    Object.values(tabs).forEach((tab) => tab.classList.add("hidden"));
    tabs[tabName].classList.remove("hidden");
  }

  // Show overview tab by default
  showTab("overview");
});

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = [
    document.getElementById("overviewContent"),
    document.getElementById("examSystemsContent"),
    document.getElementById("registrationsContent"),
    document.getElementById("resultsContent"),
  ];

  tabButtons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      // Remove active style from all buttons
      tabButtons.forEach((b) => {
        b.classList.remove("bg-green-600", "text-white");
        b.classList.add("bg-gray-200", "text-green-700");
      });
      // Add active style to clicked button
      btn.classList.add("bg-green-600", "text-white");
      btn.classList.remove("bg-gray-200", "text-green-700");

      // Hide all tab contents
      tabContents.forEach((content) => content.classList.add("hidden"));
      // Show selected tab content
      tabContents[idx].classList.remove("hidden");
    });
  });

  // Set default tab on page load
  tabButtons[0].click();
});

lucide.createIcons();

fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    if (
      typeof lucide !== "undefined" &&
      typeof lucide.createIcons === "function"
    ) {
      lucide.createIcons();
    } else {
      console.error("Lucide is not found");
    }
  })
  .catch((error) => console.error("error loading navbar"));
