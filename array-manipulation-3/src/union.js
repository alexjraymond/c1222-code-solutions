/* exported union */
// psuedocode
// create new blank array
// concat both first and second into said array
// use set, similar to unique.js, except this time we merging two arrays together
// return that new array

function union(first, second) {
  var unionArray = [];
  var concatArray = first.concat(second);
  unionArray = [...new Set(concatArray)];
  return unionArray;
}
