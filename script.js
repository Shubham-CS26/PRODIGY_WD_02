let timer;
let isTimerRunning = false;
let timeElapsed = 0;
let lapCounter = 1;

function formatTime(ms) {
    const date = new Date(ms);
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0').substring(0, 2);
    return `${minutes}:${seconds}:${milliseconds}`;
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = formatTime(timeElapsed);
}

function startStopwatch() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        timer = setInterval(() => {
            timeElapsed += 10; // Increment time by 10 milliseconds
            updateDisplay();
        }, 10); // Update display every 10 milliseconds
    }
}

function pauseStopwatch() {
    if (isTimerRunning) {
        isTimerRunning = false;
        clearInterval(timer);
    }
}

function resetStopwatch() {
    isTimerRunning = false;
    clearInterval(timer);
    timeElapsed = 0;
    lapCounter = 1;
    updateDisplay();
    document.getElementById('laps').innerHTML = ''; // Clear lap list
}

function recordLap() {
    if (isTimerRunning) {
        const lapTime = formatTime(timeElapsed);
        const lapElement = document.createElement('li');
        lapElement.textContent = `Lap ${lapCounter}: ${lapTime}`;
        document.getElementById('laps').appendChild(lapElement);
        lapCounter++;
    }
}

// Event listeners for buttons
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('startBtn').addEventListener('click', startStopwatch);
    document.getElementById('pauseBtn').addEventListener('click', pauseStopwatch);
    document.getElementById('resetBtn').addEventListener('click', resetStopwatch);
    document.getElementById('lapBtn').addEventListener('click', recordLap);
});
