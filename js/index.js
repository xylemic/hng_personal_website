const currentTimeUTC = document.querySelector('[data-testid="current-time-utc"]');

const currentDay = document.querySelector('[data-testid="current-day"]');

function updateDateTime() {
  const now = new Date();
  const utcTime = now.toLocaleTimeString('en-US', { timeZone: 'UTC' });
  const day = now.toLocaleDateString('en-US', { weekday: 'long' });

  currentTimeUTC.textContent = `Current Time (UTC): ${utcTime}`;

  currentDay.textContent = `Current Day: ${day}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);