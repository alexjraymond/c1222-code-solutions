/* exported getKeys */
// PseudoCode

// Need to extract the keys of the inputted objects
// put them into an array

// PseudoCode with Codey Words
// define a blank array
// for in loop that pushes new key variable to new array

function getKeys(object) {
  var newArr = [];
  for (var key in object) {
    newArr.push(key);
  }
  return newArr;
}
