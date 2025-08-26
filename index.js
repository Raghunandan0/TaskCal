// const monthNameEl = document.getElementById("month-name");
// const dayNameEl = document.getElementById("day-name");
// const dayNumEl = document.getElementById("day-number");
// const yearEl = document.getElementById("year");

// const date = new Date();
// const month = date.getMonth();
// monthNameEl.innerText = date.toLocaleString("en", {
//   month: "long",
// });

// dayNameEl.innerText = date.toLocaleString("en", {
//   weekday: "long",
// });

// dayNumEl.innerText = date.getDate();

// yearEl.innerText = date.getFullYear();






const monthYearEl = document.getElementById("month-year");
const calendarDaysEl = document.getElementById("calendar-days");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");

let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

function renderCalendar(month, year) {
  calendarDaysEl.innerHTML = "";
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  monthYearEl.textContent = `${date.toLocaleString("en", {
    month: "long",
  })} ${year}`;

  // Empty slots before first day
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    calendarDaysEl.appendChild(emptyDiv);
  }

  // Dates
  for (let day = 1; day <= lastDate; day++) {
    const dayEl = document.createElement("div");
    dayEl.textContent = day;

    // Highlight today
    if (
      day === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
    ) {
      dayEl.classList.add("today");
    }

    // Click to select
    dayEl.addEventListener("click", () => {
      document.querySelectorAll(".calendar-days div").forEach((d) =>
        d.classList.remove("selected")
      );
      dayEl.classList.add("selected");
    });

    calendarDaysEl.appendChild(dayEl);
  }
}

prevMonthBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  date = new Date(currentYear, currentMonth);
  renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  date = new Date(currentYear, currentMonth);
  renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);



