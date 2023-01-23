// pseudo
// if keyboardevent.key === $wrap[i] {className that letter to green & move line -> } else {red}

var $spans = document.querySelectorAll('span');
var currentLetterIndex = 0;
var totalClicks = 0;
var goodClicks = 0;
var $accuracy = document.querySelector('.accuracy');

// compare to text content at span of currentletterindex

function monkeyType(event) {
  var $keyPressed = event.key;

  if ($keyPressed === $spans[currentLetterIndex].textContent) {

    $spans[currentLetterIndex].classList.add('correct');
    $spans[currentLetterIndex].classList.remove('wrong');
    $spans[currentLetterIndex].classList.remove('current');
    $spans[currentLetterIndex + 1].classList.add('current');
    currentLetterIndex++;
    goodClicks++;
    totalClicks++;

  } else {
    $spans[currentLetterIndex].classList.add('wrong');
    totalClicks++;
  }
  if (currentLetterIndex === $spans.length - 1) {
    var finalScore = (goodClicks / totalClicks) * 100;
    var outputScore = finalScore + '%';
    $accuracy.textContent = outputScore;
  }
}
document.addEventListener('keydown', monkeyType);
