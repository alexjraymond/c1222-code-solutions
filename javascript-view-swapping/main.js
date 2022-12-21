var $tabContainer = document.querySelector('.tab-container');
var $tabNodes = document.querySelectorAll('.tab');
var $viewNodes = document.querySelectorAll('.view');

function onClick(event) {
  var $event = event.target;
  if ($event.matches('.tab')) {
    for (var i = 0; i < $tabNodes.length; i++) {
      if ($tabNodes[i] === $event) {
        $tabNodes[i].classList.add('active');
      } else { $tabNodes[i].classList.remove('active'); }
    }
    var $viewVal = event.target.getAttribute('data-view');

    for (var k = 0; k < $viewNodes.length; k++) {
      if ($viewNodes[k].getAttribute('data-view') === $viewVal) {
        $viewNodes[k].classList.remove('hidden');
      } else {

        $viewNodes[k].classList.add('hidden');
      }
    }
  }
}

$tabContainer.addEventListener('click', onClick);
