/* exported getIndexes */
function getIndexes(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(array.indexOf(array[i]));
  }
  return newArr;
}
