var $bulb = document.querySelector('span');
var $wall = document.querySelector('.container');

function onClick() {
  if ($bulb.className === 'lightbulb on col-full') {
    $bulb.className = 'lightbulb off col-full';
    $wall.className = 'container background-off';
  } else {
    $bulb.className = 'lightbulb on col-full';
    $wall.className = 'container background-on';
  }
}
$bulb.addEventListener('click', onClick);
