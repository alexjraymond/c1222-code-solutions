var $longWords = document.querySelector('p');

function handleWords(event) {
  for ($longWords in event) {
    if ($longWords.length >= 8) {
      $longWords.replaceWith(/fox/g, '<span>fox</span>');
    }
  }
}

$longWords.addEventListener('load', handleWords);
