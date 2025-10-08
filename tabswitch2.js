const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const yearSelect = document.getElementById("yearSelect");
const monthSelect = document.getElementById("monthSelect");
const calendarTable = document.getElementById("calendarTable");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

const currentYear = new Date().getFullYear();
for (let y = currentYear - 5; y <= currentYear + 5; y++) {
  const opt = document.createElement("option");
  opt.value = y;
  opt.textContent = y;
  yearSelect.appendChild(opt);
}
yearSelect.value = currentYear;
monthSelect.value = new Date().getMonth();

let selectedDay = null;

function renderCalendar(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  let html = `
    <thead>
      <tr>
        <th class="py-2 text-gray-500 font-semibold">Sun</th>
        <th class="py-2 text-gray-500 font-semibold">Mon</th>
        <th class="py-2 text-gray-500 font-semibold">Tue</th>
        <th class="py-2 text-gray-500 font-semibold">Wed</th>
        <th class="py-2 text-gray-500 font-semibold">Thu</th>
        <th class="py-2 text-gray-500 font-semibold">Fri</th>
        <th class="py-2 text-gray-500 font-semibold">Sat</th>
      </tr>
    </thead>
    <tbody>
  `;
  let day = 1;
  for (let row = 0; row < 6; row++) {
    html += "<tr>";
    for (let col = 0; col < 7; col++) {
      if (row === 0 && col < firstDay) {
        html += `<td class="py-2"></td>`;
      } else if (day > daysInMonth) {
        html += `<td class="py-2"></td>`;
      } else {
        const isToday =
          day === new Date().getDate() &&
          month === new Date().getMonth() &&
          year === new Date().getFullYear();
        const isSelected =
          selectedDay === day &&
          year === parseInt(yearSelect.value) &&
          month === parseInt(monthSelect.value);
        html += `<td>
            <button 
            class="w-10 h-10 transition 
              ${
                isToday
                  ? "bg-blue-500 text-black font-bold transition"
                  : "bg-white text-gray-700"
              } 
              ${
                isSelected
                  ? "bg-blue-950 text-black rounded font-bold"
                  : "hover:bg-blue-100 hover:border hover:border-blue-400"
              }
              ${
                isSelected
                  ? "border border-blue-500"
                  : "border border-transparent"
              }
              "
            style="border-radius:0"
            data-day="${day}"
            type="button"
          >${day}</button>
        </td>`;
        day++;
      }
    }
    html += "</tr>";
    if (day > daysInMonth) break;
  }
  html += "</tbody>";
  calendarTable.innerHTML = html;

  // Add click listeners for day buttons
  calendarTable.querySelectorAll("button[data-day]").forEach((btn) => {
    btn.addEventListener("click", function () {
      selectedDay = parseInt(this.getAttribute("data-day"));
      renderCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));
      // Optionally update event section here
    });
  });
}

renderCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));

monthSelect.addEventListener("change", () => {
  renderCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));
});
yearSelect.addEventListener("change", () => {
  renderCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));
});
prevMonthBtn.addEventListener("click", () => {
  let month = parseInt(monthSelect.value);
  let year = parseInt(yearSelect.value);
  if (month === 0) {
    month = 11;
    year--;
    yearSelect.value = year;
  } else {
    month--;
  }
  monthSelect.value = month;
  renderCalendar(year, month);
});
nextMonthBtn.addEventListener("click", () => {
  let month = parseInt(monthSelect.value);
  let year = parseInt(yearSelect.value);
  if (month === 11) {
    month = 0;
    year++;
    yearSelect.value = year;
  } else {
    month++;
  }
  monthSelect.value = month;
  renderCalendar(year, month);
});

// Tabswitch
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = [
    document.getElementById("CalendarContent"),
    document.getElementById("UpcomingEventsContent"),
    document.getElementById("AllEvents"),
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
