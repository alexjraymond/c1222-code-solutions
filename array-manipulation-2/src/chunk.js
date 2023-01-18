/* exported chunk */

// psueodocode
// we're given an array, and we want to slice it into specific chunk sizes that are given to us as well
// new variable array will be equal to the array slized @ size
// return that new array

function chunk(array, size) {
  var newArr = [array.slice(size)];
  return newArr;
}
