var $theForm = document.querySelector('#contact-form');
var $theFocus = document.querySelector('input');

function handleFocus(event) {
  console.log('focus');
  console.log(event.target.name);
}

// $theForm.addEventListener('focus', handleFocus);

function handleBlur(event) {
  console.log('blur was fired');
  console.log(event.target.name);

}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

$theFocus.addEventListener('focus', handleFocus);
$theFocus.addEventListener('blur', handleBlur);
$theForm.addEventListener('input', handleInput);
