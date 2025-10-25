const tabButtons = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-tab");

    tabButtons.forEach((b) => {
      b.classList.remove("text-emerald-700", "border-emerald-700");
      b.classList.add("border-transparent");
    });

    tabContent.forEach((content) => {
      content.classList.add("hidden");
    });

    btn.classList.add("text-emerald-700", "border-emerald-700");
    btn.classList.remove("border-transparent");
    document.getElementById(target).classList.remove("hidden");
  });
});

const userModal = document.getElementById("userModal");
const openUserModal = document.getElementById("openUserModal");
const closeUserModal = document.getElementById("closeUserModal");

openUserModal.addEventListener("click", () => {
  userModal.classList.remove("hidden");
  userModal.classList.add("flex");
});

closeUserModal.addEventListener("click", () => {
  userModal.classList.add("hidden");
  userModal.classList.remove("flex");
});

document.addEventListener("DOMContentLoaded", () => {
  function toggleSwitch(id) {
    const btn = document.getElementById(id);
    if (!btn) return;
    const dot = btn.querySelector(".dot");

    btn.addEventListener("click", () => {
      const isActive = btn.classList.toggle("bg-emerald-600");
      btn.classList.toggle("bg-gray-300", !isActive);

      if (dot) {
        dot.classList.toggle("translate-x-5", isActive);
        dot.classList.toggle("translate-x-0", !isActive);
      }
    });
  }

  [
    "toggleCA",
    "toggleExamAcad",
    "toggleFee",
    "toggleExam",
    "toggleAttendance",
    "toggleEmergency",
    "toggleAnnouncement",
    "toggleFA",
    "togglePas",
    "toggleBackup",
  ].forEach(toggleSwitch);
});
