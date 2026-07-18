const targetDate = new Date("2026-12-18T12:00:00+01:00");

const elements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};

function updateCountdown() {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    document.querySelector(".countdown").innerHTML =
      "<p>Our adventure begins today ♡</p>";
    return;
  }

  const days = Math.floor(difference / 86_400_000);
  const hours = Math.floor((difference / 3_600_000) % 24);
  const minutes = Math.floor((difference / 60_000) % 60);
  const seconds = Math.floor((difference / 1_000) % 60);

  elements.days.textContent = days;
  elements.hours.textContent = String(hours).padStart(2, "0");
  elements.minutes.textContent = String(minutes).padStart(2, "0");
  elements.seconds.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);