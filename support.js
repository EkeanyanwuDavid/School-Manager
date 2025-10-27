const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    tabBtns.forEach((b) => {
      b.classList.remove(
        "text-emerald-700",
        "border-b-2",
        "border-emerald-700"
      );
      b.classList.add("text-slate-600");
    });

    btn.classList.add("text-emerald-700", "border-b-2", "border-emerald-700");
    btn.classList.remove("text-slate-600");

    tabPanels.forEach((panel) => {
      panel.classList.add("hidden");
    });

    document.getElementById(target).classList.remove("hidden");
  });
});

// Modal (simple accessible modal)
const newTicketBtn = document.getElementById("newTicketBtn");
const modalEl = document.getElementById("newTicketModal");
const modalCloseEls = document.querySelectorAll("[data-modal-close]");
const modalBackdrop = document.querySelector("[data-modal-backdrop]");

function openModal() {
  modalEl.classList.remove("hidden");
  modalEl.classList.add("flex");
  // trap focus could be added for production
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modalEl.classList.add("hidden");
  modalEl.classList.remove("flex");
  document.body.style.overflow = "";
}

newTicketBtn.addEventListener("click", openModal);
modalCloseEls.forEach((btn) => btn.addEventListener("click", closeModal));
modalBackdrop?.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modalEl.classList.contains("hidden")) closeModal();
});

// Simple form submit (demo)
document.getElementById("newTicketForm").addEventListener("submit", (e) => {
  e.preventDefault();
  // collect values
  const data = {
    title: document.getElementById("ticketTitle").value.trim(),
    category: document.getElementById("ticketCategory").value,
    priority: document.getElementById("ticketPriority").value,
    submittedBy: document.getElementById("submittedBy").value.trim(),
    description: document.getElementById("ticketDescription").value.trim(),
  };

  closeModal();
  e.target.reset();
});

const ticketSearch = document.getElementById("ticketSearch");
const statusFilter = document.getElementById("statusFilter");
const clearFilters = document.getElementById("clearFilters");
const ticketsList = document.getElementById("ticketsList");

function filterTickets() {
  const q = ticketSearch.value.trim().toLowerCase();
  const status = statusFilter.value;

  Array.from(ticketsList.children).forEach((item) => {
    const text = item.innerText.toLowerCase();
    const matchesQuery = q === "" || text.includes(q);
    const matchesStatus =
      status === "all" || text.includes(status.toLowerCase());
    item.style.display = matchesQuery && matchesStatus ? "" : "none";
  });
}

ticketSearch.addEventListener("input", filterTickets);
statusFilter.addEventListener("change", filterTickets);
clearFilters.addEventListener("click", () => {
  ticketSearch.value = "";
  statusFilter.value = "all";
  filterTickets();
});

// footer year
document.getElementById("year").textContent = new Date().getFullYear();
