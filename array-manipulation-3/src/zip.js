/* exported zip */

// pseudocode
// we want to return an array of arrays, where each element at its index is matched with the element of the other array at the same index
// find the shortest length array and use that as the length for for loop
// push into the new array the first array at i and the second array at i
// return final array

function zip(first, second) {
  var finalArray = [];
  var smallestLength = 0;
  if (first.length <= second.length) {
    smallestLength = first.length;
  } else { smallestLength = second.length; }
  for (var i = 0; i < smallestLength; i++) {
    finalArray.push([first[i], second[i]]);
  }
  return finalArray;
}
