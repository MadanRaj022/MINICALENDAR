const monthNameElement = document.getElementById("month-name");
const dayNameElement = document.getElementById("day-name");
const dayNumElement = document.getElementById("day-number");
const yearElement = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
monthNameElement.textContent = date.toLocaleString("en", { month: "long" });
dayNameElement.textContent = date.toLocaleString("en", { weekday: "long" });
dayNumElement.textContent = date.getDate();
yearElement.textContent = date.getFullYear();
