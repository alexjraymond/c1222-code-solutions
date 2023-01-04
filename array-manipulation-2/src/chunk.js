/* exported chunk */

function chunk(array, size) {
  var newArr = [array.slice(size)];
  return newArr;
}
