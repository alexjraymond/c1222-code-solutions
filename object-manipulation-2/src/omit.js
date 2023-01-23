/* exported omit */

// pseudocode
// opposite alert
// we want to create an object composed of the specific source properties NOT given to us
// define a new blank object
// for loop
// if the key is NOT listed, but part of the desired input, then add it to the new object
// otherwise skip
// return the new object

function omit(source, keys) {

  var newObj = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      continue;
    } else { newObj[key] = source[key]; }
  }

  return newObj;
}
