/* exported initial */

// pseudocode
// look at the input
// ignore the first thing
// keep everything past the first thing

// pseudo code with codey words
// define new array
// for loop that goes to array length minus 1
// set new array index equal to input array index
// return new array

function initial(array) {
  var newArr = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
