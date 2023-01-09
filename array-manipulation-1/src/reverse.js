/* exported reverse */

// pseudocode
// we take the last pieces of the array and put them at the front
// reverse it all!!!

// pseudocode with codey words
// define empty array
// standard for loop where i = 0, etc
// we set the i index of new array equal to the array length minus 1 minus i
// return new array

function reverse(array) {
  var revArr = [];
  for (var i = 0; i < array.length; i++) {
    revArr.push(array[array.length - i - 1]);
  }
  return revArr;
}
