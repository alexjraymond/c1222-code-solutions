/* exported flatten */

// psuedocode
// define a new array
// we want to take in an array of arrays and want to make it 1 less array deep
// yo dawg i heard you like arrays
// return that new array
// check lengths

function flatten(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > 0) {
      for (var k = 0; k < array[i].length; k++) {
        if (Array.isArray(array[i])) {
          newArr.push(array[i][k]);
        } else if (Array.isArray(array[i]) === false) {
          newArr[i] = array[i];
        }
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
