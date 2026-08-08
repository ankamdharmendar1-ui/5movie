// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Status bar message rotation — edit this list to say whatever you're up to
const statuses = [
  "building something new",
  "open to new projects",
  "sipping coffee, writing code",
];

let i = 0;
const statusEl = document.getElementById("status-msg");

if (statusEl && statuses.length > 1) {
  setInterval(() => {
    i = (i + 1) % statuses.length;
    statusEl.textContent = statuses[i];
  }, 4000);
}
