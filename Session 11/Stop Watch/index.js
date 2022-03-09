let seconds = 0;
let minutes = 0;
let hours = 0;

let secs;
let mins;
let hrs;

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

startButton.addEventListener("click", startClock);
function startClock() {
  var started = setInterval(function () {
    seconds = seconds + 1;
    if (seconds === 60) {
      seconds = 0;
      minutes = minutes + 1;
    }
    mins = minutes < 10 ? "0" + minutes : minutes;
    if (minutes === 60) {
      minutes = 0;
      hours = hours + 1;
    }
    hrs = hours < 10 ? "0" + hours : hours;
    secs = seconds < 10 ? "0" + seconds : seconds;

    console.log("Seconds:" + seconds);
    console.log("Minutes:" + minutes);
    console.log("hours:" + hours);
    document.getElementById("h1").innerHTML = `${hrs} H: ${mins} M: ${secs} S`;
  }, 1000);
  stopButton.addEventListener("click", function () {
    clearInterval(started);
  });
  resetButton.addEventListener("click", function () {
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(started);
    document.getElementById("h1").innerHTML = `00 H: 00 M: 00 S`;
  });
}
