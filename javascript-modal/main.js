var $openModal = document.querySelector('.open-modal');
var $overlay = document.querySelector('.overlay');
var $popup = document.querySelector('.popup');
var $noButton = document.querySelector('.no');

function onClick() {
  $overlay.className = 'overlay on';
  $popup.className = 'popup fixed on';

}

function offClick() {
  $overlay.className = 'overlay off';
  $popup.className = 'popup fixed off';

}

$openModal.addEventListener('click', onClick);
$noButton.addEventListener('click', offClick);
