
var nIntervalId;

var $countdownH1 = document.querySelector('.countdown-display');
var timer = 0;

var countdownArr = ['3', '2', '1', '~Earth Beeeelooowww Us~'];

function changeText() {
  if (!nIntervalId) {
    nIntervalId = setInterval(countdown, 1000);
  }
}

function countdown() {
  $countdownH1.textContent = countdownArr[timer];
  timer++;
}

function clearInt() {
  clearInterval(nIntervalId);
}

setTimeout(clearInt, 5000);

window.addEventListener('load', changeText);
