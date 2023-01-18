/* exported drop */

// psueodocode
// we want to take in the array, and do a for loop
// the for loop will go from i to count, along the array length, and push those array at index thingies to a blank array variable we make
// return that new array

function drop(array, count) {
  var newArr = [];
  if (count > array.length) { return array; } else {
    for (var i = count; i < array.length; i++) { newArr.push(array[i]); }
    return newArr;
  }
}
