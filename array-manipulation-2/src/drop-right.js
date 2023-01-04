/* exported dropRight */

function dropRight(array, count) {
  var newArr = [];
  var lengthCount = array.length - count;
  if (count < array.length) {
    for (var i = 0; i < lengthCount; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  } else { return array; }
}
