// Digital Clock
function updateDigitalClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes.toString().padStart(2, '0');

    document.getElementById("digital-hours").textContent = hours;
    document.getElementById("digital-minutes").textContent = minutes;
    document.getElementById("digital-ampm").textContent = ampm;
}
setInterval(updateDigitalClock, 1000);
updateDigitalClock();

// World Clock
function updateWorldClock() {
    let timezoneOffset = parseFloat(document.getElementById("world-timezone").value);
    let now = new Date();
    let utc = now.getTime() + now.getTimezoneOffset() * 60000;
    let worldTime = new Date(utc + (3600000 * timezoneOffset));

    let hours = worldTime.getHours();
    let minutes = worldTime.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes.toString().padStart(2, '0');

    document.getElementById("world-hours").textContent = hours;
    document.getElementById("world-minutes").textContent = minutes;
    document.getElementById("world-ampm").textContent = ampm;
}
document.getElementById("world-timezone").addEventListener("change", updateWorldClock);
setInterval(updateWorldClock, 1000);
updateWorldClock();

// Stopwatch
let stopwatchInterval, stopwatchTime = 0;
function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            document.getElementById("stopwatch-time").textContent = new Date(stopwatchTime * 1000).toISOString().substr(11, 8);
        }, 1000);
    }
}
function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchTime = 0;
    document.getElementById("stopwatch-time").textContent = "00:00:00";
}

// Timer
let timerInterval;
function startTimer() {
    let hours = parseInt(document.getElementById("timer-hours").value) || 0;
    let minutes = parseInt(document.getElementById("timer-minutes").value) || 0;
    let seconds = parseInt(document.getElementById("timer-seconds").value) || 0;
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds > 0) {
        timerInterval = setInterval(() => {
            totalSeconds--;
            document.getElementById("timer-display").textContent = new Date(totalSeconds * 1000).toISOString().substr(11, 8);
            if (totalSeconds <= 0) clearInterval(timerInterval);
        }, 1000);
    }
}
function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById("timer-display").textContent = "00:00:00";
}
