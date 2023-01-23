/* exported dropRight */

// psueodocode
// similar to drop, except we're determining a different length (the array's length minus the count input)
// if count is less than the array's length, then we'll push array at i to the new array variable we assign
// otherwise we return the array that was given to us
// return that new array

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
