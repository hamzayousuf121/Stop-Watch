var neno = 00;
var seconds = 00;
var minutes = 00;

var appendNeno = document.getElementById('neno');
var appendSeconds = document.getElementById('seconds');
var appendMinutes = document.getElementById('minutes');
var list = document.getElementById('list');
var startBtn = document.getElementById('btnStart');
var stopBtn = document.getElementById('btnStop');
var resetBtn = document.getElementById('btnReset');
var lapBtn = document.getElementById('btnLap');
var interval;

lapBtn.addEventListener('click', () => {
    var anchor = document.createElement('a');
    var text = document.createTextNode(appendMinutes.innerHTML + ': ' + appendSeconds.innerHTML + ' : ' + appendNeno.innerHTML);
    anchor.setAttribute('class', 'list-group-item list-group-item-action');
    anchor.appendChild(text)
    list.appendChild(anchor);
})

function startTime() {
    neno++;
    if (neno <= 9) {
        appendNeno.innerHTML = "0" + neno;
    } else if (neno > 9 && neno < 60) {
        appendNeno.innerHTML = neno;
    } else {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        neno = 0;
        appendneno.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds
    }
    if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
    }
    if (minutes > 9) {
        appendMinutes.innerHTML = minutes
    }
}

startBtn.onclick = function () {
    interval = setInterval(startTime, 100);
}

stopBtn.onclick = function () {
    clearInterval(interval);
}

resetBtn.onclick = function () {
    clearInterval(interval);
    appendMinutes.innerHTML = "0" + 0;
    appendNeno.innerHTML = "0" + 0;
    appendSeconds.innerHTML = "0" + 0;
}