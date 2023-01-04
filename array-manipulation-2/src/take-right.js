/* exported takeRight */

// function takeRight(array, count) {

// }

function takeRight(array, count) {
  var newArr = [];
  var lengthCount = array.length - count;
  if (count < array.length) {
    for (var i = lengthCount; i < array.length; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  } else { return array; }
}
