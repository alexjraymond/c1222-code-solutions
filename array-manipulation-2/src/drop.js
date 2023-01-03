/* exported drop */

function drop(array, count) {
  var newArr = [];
  if (count > array.length) { return array; } else {
    for (var i = count; i < array.length; i++) { newArr.push(array[i]); }
    return newArr;
  }
}
