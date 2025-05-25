const calendar = document.getElementById("calendar");
const timeslotModal = document.getElementById("timeslotModal");
const closeModal = document.getElementById("closeModal");
const timeslots = document.getElementById("timeslots");
const monthYearLabel = document.getElementById("monthYear");
const prevBtn = document.getElementById("prevMonth");
const nextBtn = document.getElementById("nextMonth");

const slotTimes = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", 
  "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", 
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let currentDate = new Date();

function generateCalendar(year, month) {
  calendar.innerHTML = "";

  // Show month/year
  const displayDate = new Date(year, month);
  const monthName = displayDate.toLocaleString("default", { month: "long" });
  monthYearLabel.textContent = `${monthName} ${year}`;

  // Add day headers
  for (let d of daysOfWeek) {
    const dayName = document.createElement("div");
    dayName.className = "day-name";
    dayName.textContent = d;
    calendar.appendChild(dayName);
  }

  const firstDay = new Date(year, month, 1).getDay();
  const numDays = new Date(year, month + 1, 0).getDate();

  // Empty cells before the first day
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "day-cell";
    calendar.appendChild(emptyCell);
  }

  // Day cells
  for (let day = 1; day <= numDays; day++) {
    const dayCell = document.createElement("div");
    dayCell.className = "day-cell";
    dayCell.textContent = day;

    const cellDate = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // ignore time for comparison

    const dayOfWeek = cellDate.getDay(); // 0 = Sunday, 6 = Saturday

    if (cellDate < today) {
      dayCell.classList.add("past-day");
      dayCell.style.pointerEvents = "none";
      dayCell.style.opacity = "0.5";
    } else if (dayOfWeek === 0 || dayOfWeek === 6) {
      // Weekend - disable
      dayCell.classList.add("weekend");
      dayCell.style.pointerEvents = "none";
      dayCell.style.opacity = "0.5";
    } else {
      // Weekday - allow slot selection
      dayCell.addEventListener("click", () => {
        openTimeSlotModal(day, month + 1, year);
      });
    }

    calendar.appendChild(dayCell);
  }

  updateNavButtons();
}

function openTimeSlotModal(day, month, year) {
  timeslotModal.style.display = "block";
  timeslots.innerHTML = "";

  slotTimes.forEach(time => {
    const slot = document.createElement("div");
    slot.className = "timeslot";
    slot.textContent = time;

    slot.addEventListener("click", () => {
      window.location.href = "registerPage.html";
    });

    timeslots.appendChild(slot);
  });
}

closeModal.onclick = () => {
  timeslotModal.style.display = "none";
};

window.onclick = event => {
  if (event.target === timeslotModal) {
    timeslotModal.style.display = "none";
  }
};

prevBtn.onclick = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  if (
    currentDate.getFullYear() > currentYear ||
    (currentDate.getFullYear() === currentYear && currentDate.getMonth() > currentMonth)
  ) {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
  }
};

nextBtn.onclick = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const nextMonthDate = new Date(currentYear, currentMonth + 1);

  if (
    currentDate.getFullYear() < nextMonthDate.getFullYear() ||
    (currentDate.getFullYear() === nextMonthDate.getFullYear() &&
     currentDate.getMonth() < nextMonthDate.getMonth())
  ) {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
  }
};

function updateNavButtons() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const nextMonthDate = new Date(currentYear, currentMonth + 1);

  if (
    currentDate.getFullYear() === currentYear &&
    currentDate.getMonth() === currentMonth
  ) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (
    currentDate.getFullYear() === nextMonthDate.getFullYear() &&
    currentDate.getMonth() === nextMonthDate.getMonth()
  ) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

// Initial render
generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
