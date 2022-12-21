var $tasklist = document.querySelector('.task-list');

function onClick(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target && event.target.nodeName === 'BUTTON') {
    var $taskListItem = event.target.closest('.task-list-item');
    console.log('closest .task-list-item:  ', $taskListItem);
    $taskListItem.remove();
  }
}

$tasklist.addEventListener('click', onClick);
