/* exported tail */

// pseudocode
// look at the input
// ignore the first thing
// keep everything past the first thing

// pseudo code with codey words
// define new array
// for loop where i starts at 1 instead of 0
// have new array @ i minus 1 index equal array at i index
// return new array

function tail(array) {
  var newArr = [];
  for (var i = 1; i < array.length; i++) {
    newArr[i - 1] = array[i];
  }
  return newArr;
}
