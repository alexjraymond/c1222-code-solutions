/* exported invert */

// pseudocode
// what if we take the object and flip it over here *patrick star meme*
// we want to swap the keys for the values and vice versa
// and we return that inverted object
// --
// define empty object
// a simple for in loop should do the trick
// set the new object's key to source's value at key, and all that equal to the key in the source
// return the new obj

function invert(source) {
  var newObj = {};
  for (var key in source) {
    newObj[source[key]] = key;
  }
  return newObj;
}
