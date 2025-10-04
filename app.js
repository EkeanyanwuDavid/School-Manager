document
  .getElementById("viewRecordsBtn")
  .addEventListener("click", function () {
    const date = document.getElementById("recordDate").value;
    const selectedClass = document.getElementById("recordClass").value;
    const tableDiv = document.getElementById("recordsTable");

    if (!date || !selectedClass) {
      alert("Please select both a date and a class to view records!");
      return;
    }

    tableDiv.innerHTML = `
      <h2 class="text-lg font-bold mb-2">${selectedClass} Attendance Records</h2>
      <p class="mb-4">Showing records for <strong>${date}</strong></p>
      <table class="w-full border border-gray-400 text-left">
        <thead class="bg-gray-400 text-white">
          <tr>
            <th class="p-2 border border-gray-400">Roll No</th>
            <th class="p-2 border border-gray-400">Name</th>
            <th class="p-2 border border-gray-400">Status</th>
            <th class="p-2 border border-gray-400">Check-in Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2 border border-gray-400">1</td>
            <td class="p-2 border border-gray-400">Micheal Okeke</td>
            <td class="p-2 border border-gray-400">Present</td>
            <td class="p-2 border border-gray-400">08:00 AM</td>
          </tr>
          <tr>
            <td class="p-2 border border-gray-400">2</td>
            <td class="p-2 border border-gray-400">Amadi Ukoha</td>
            <td class="p-2 border border-gray-400">Late</td>
            <td class="p-2 border border-gray-400">08:30 AM</td>
          </tr>
        </tbody>
      </table>
    `;
    tableDiv.classList.remove("hidden");
  });

// Toggle User Dropdown
const userMenuToggle = document.getElementById("userMenuToggle");
const userMenu = document.getElementById("userMenu");

userMenuToggle.addEventListener("click", () => {
  userMenu.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!userMenuToggle.contains(e.target) && !userMenu.contains(e.target)) {
    userMenu.classList.add("hidden");
  }
});
