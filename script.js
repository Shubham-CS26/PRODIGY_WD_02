let timer;
let isRunning = false;
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
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            timeElapsed += 10;
            updateDisplay();
        }, 10);
    }
}

function pauseStopwatch() {
    isRunning = false;
    clearInterval(timer);
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(timer);
    timeElapsed = 0;
    lapCounter = 1;
    updateDisplay();
    document.getElementById('laps').innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        const lapTime = formatTime(timeElapsed);
        const lapElement = document.createElement('li');
        lapElement.textContent = `Lap ${lapCounter}: ${lapTime}`;
        document.getElementById('laps').appendChild(lapElement);
        lapCounter++;
    }
}
