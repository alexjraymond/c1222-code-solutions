/* exported getValues */

// PseudoCode
// similar to getKeys function
// we look at the objects AT the key and put that into an array

// PseudoCode with Codey Words
// define new blank array
// for in loop again (same setup as getKeys)
// make sure to put a new variable in the for loop that equals the object AT key
// return the array

function getValues(object) {
  var newArr = [];
  for (var key in object) {
    var newValue = object[key];
    newArr.push(newValue);
  }
  return newArr;
}
