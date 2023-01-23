/* exported pick */

// pseudocode
// we want to create an object composed of the specific source properties given to us
// define a new blank object
// for loop
// if the key is listed & part of the desired input, then add it to the new object
// otherwise skip
// return the new object

function pick(source, keys) {

  var newObj = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      newObj[key] = source[key];
    }
  }

  return newObj;
}
