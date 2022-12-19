var $clickButton = document.querySelector('.click-button');

function handleClick(event) {

  console.log('button clicked');
  console.log(event);
  console.log($clickButton);

}
$clickButton.addEventListener('click', handleClick, false);

var $hoverButton = document.querySelector('.hover-button');

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log($hoverButton);
}

$hoverButton.addEventListener('mouseover', handleMouseover);

var $dblClickButton = document.querySelector('.double-click-button');

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log($dblClickButton);
}

$dblClickButton.addEventListener('dblclick', handleDoubleClick);
