var $h1 = document.querySelector('h1');

function changeTitle() {
  $h1.textContent = 'Hello There';
}

setTimeout(changeTitle, 2000);
