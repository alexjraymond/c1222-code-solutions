/* exported take */

// pseudocode
// take out however many numbers from the array the user wants
// return them as a new array

function take(array, count) {
  var newArr = [];
  if (count > array.length) { return array; } else {
    for (var i = 0; i < count; i++) { newArr.push(array[i]); }
    return newArr;
  }
}
