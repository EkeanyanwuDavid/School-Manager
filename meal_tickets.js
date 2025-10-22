document.addEventListener("DOMContentLoaded", () => {
  const tabs = {
    student: document.getElementById("Student"),
    Vendor: document.getElementById("Vendor"),
    Transaction: document.getElementById("Transaction"),
  };

  document.getElementById("btnStudent").addEventListener("click", () => {
    showTab("student");
  });
  document.getElementById("btnVendor").addEventListener("click", () => {
    showTab("Vendor");
  });
  document.getElementById("btnTransaction").addEventListener("click", () => {
    showTab("Transaction");
  });

  function showTab(tabName) {
    Object.values(tabs).forEach((tab) => tab.classList.add("hidden"));
    tabs[tabName].classList.remove("hidden");
  }

  showTab("student");
});

document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = Array.from(document.querySelectorAll(".tab-btn"));
  const tabContent = [
    document.getElementById("Student"),
    document.getElementById("Vendor"),
    document.getElementById("Transaction"),
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

// ======= Modal helpers =======
function openModal(modal) {
  if (!modal) return;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  // optional: prevent background scroll
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}

// ======= STUDENT MODAL =======
const openStudentBtn = document.getElementById("openModal"); // button that opens student modal
const studentModal = document.getElementById("studentModal"); // modal container
const closeStudentBtn = document.getElementById("closeStudentModal"); // close button inside student modal

if (openStudentBtn && studentModal) {
  openStudentBtn.addEventListener("click", () => openModal(studentModal));
}
if (closeStudentBtn && studentModal) {
  closeStudentBtn.addEventListener("click", () => closeModal(studentModal));
}
// backdrop click
if (studentModal) {
  studentModal.addEventListener("click", (e) => {
    if (e.target === studentModal) closeModal(studentModal);
  });
}

// ======= VENDOR MODAL =======
const openVendorBtn = document.getElementById("openVendorModal"); // button that opens vendor modal
const vendorModal = document.getElementById("vendorModal"); // vendor modal container
const closeVendorBtn = document.getElementById("closeVendorModal"); // close button inside vendor modal

if (openVendorBtn && vendorModal) {
  openVendorBtn.addEventListener("click", () => openModal(vendorModal));
}
if (closeVendorBtn && vendorModal) {
  closeVendorBtn.addEventListener("click", () => closeModal(vendorModal));
}
// backdrop click for vendor modal
if (vendorModal) {
  vendorModal.addEventListener("click", (e) => {
    if (e.target === vendorModal) closeModal(vendorModal);
  });
}

// ======= Global keyboard support (Esc to close) =======
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (studentModal && !studentModal.classList.contains("hidden"))
      closeModal(studentModal);
    if (vendorModal && !vendorModal.classList.contains("hidden"))
      closeModal(vendorModal);
  }
});
