document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons();

  const debtorTabButtons = document.querySelectorAll("#debtorTabs .tab-btn");
  const debtorTabContents = [
    document.getElementById("AllDebtors"),
    document.getElementById("Overdue"),
    document.getElementById("Critical"),
    document.getElementById("PaymentPlans"),
  ];

  const originalClasses = [];
  debtorTabButtons.forEach((btn) => {
    originalClasses.push(btn.className);
  });

  const activeClasses = [
    "bg-green-600 text-white", // All Debtors
    "bg-red-600 text-white", // Overdue
    "bg-yellow-500 text-white", // Critical
    "bg-blue-600 text-white", // Payment Plans
  ];

  debtorTabButtons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      // Reset all buttons to their original classes
      debtorTabButtons.forEach((b, i) => {
        b.className = originalClasses[i];
      });

      // Apply active color and bold style
      btn.classList.add(...activeClasses[idx].split(" "), "font-bold");

      // Hide all content
      debtorTabContents.forEach((c) => c.classList.add("hidden"));

      debtorTabContents[idx].classList.remove("hidden");
    });
  });

  if (debtorTabButtons.length > 0) debtorTabButtons[0].click();
});
