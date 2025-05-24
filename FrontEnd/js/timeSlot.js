const calendar = document.getElementById("calendar");
const timeslotModal = document.getElementById("timeslotModal");
const closeModal = document.getElementById("closeModal");
const timeslots = document.getElementById("timeslots");
const monthYearLabel = document.getElementById("monthYear");
const prevBtn = document.getElementById("prevMonth");
const nextBtn = document.getElementById("nextMonth");

const slotTimes = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM"
];


const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let currentDate = new Date();

function generateCalendar(year, month) {
  calendar.innerHTML = "";

  // Show month/year
  const monthName = currentDate.toLocaleString("default", { month: "long" });
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

    if (cellDate < today) {
        dayCell.classList.add("past-day");
        dayCell.style.pointerEvents = "none"; // make unclickable
        dayCell.style.opacity = "0.5";
    } else {
        dayCell.addEventListener("click", () => {
        openTimeSlotModal(day, month + 1, year);
        });
    }

    calendar.appendChild(dayCell);
    }

}

function openTimeSlotModal(day, month, year) {
  timeslotModal.style.display = "block";
  timeslots.innerHTML = "";

  slotTimes.forEach(time => {
    const slot = document.createElement("div");
    slot.className = "timeslot";
    slot.textContent = time;

    // Redirect on click
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
  currentDate.setMonth(currentDate.getMonth() - 1);
  generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
};

nextBtn.onclick = () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
};

// Initial render
generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
