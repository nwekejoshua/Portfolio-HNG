function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.getElementById('currentTimeUTC').textContent = `Current Time (UTC): ${utcTime}`;
    document.getElementById('currentDay').textContent = `Current Day: ${dayOfWeek}`;
}

updateTime();
setInterval(updateTime, 60000);
