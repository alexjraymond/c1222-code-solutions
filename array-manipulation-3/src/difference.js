/* exported difference */

// pseudocode
// dont use set because it just removes duplicates
// for loops to check if first doesn't include second at i, and vice versa
// push those unique numbers to new array
// return that array

function difference(first, second) {

  var thatArray = [];

  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      thatArray.push(first[i]);
    }
  }
  for (var k = 0; k < second.length; k++) {
    if (!first.includes(second[k])) {
      thatArray.push(second[k]);
    }
  }
  return thatArray;
}
