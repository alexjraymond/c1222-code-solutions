/* exported equal */

// pseudocode
// take in the first array, and see if its perfectly equal to the second array
// if theyre equal, return true
// couple if statements for the conditions, important one being
// if at any point the index of first and second dont match, spit out false
// else, return false

function equal(first, second) {

  if (first.length === 0 && second.length === 0) {
    return true;
  }
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
