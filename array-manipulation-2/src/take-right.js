/* exported takeRight */

// psueodocode
// similar to take dot js algo, we are doing the array length minus the count though
// as long as the count input is less than array length, then
// we need to push the array at index to a new blank array variable we define
// otherwise we return the array given
// return new array

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
