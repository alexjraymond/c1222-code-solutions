/* exported unique */

// psuedocode
// a function where we only return the unique elements of an array
// create a new array and use the set method (thank you break time chats)
// the set method will return unique values to the empty unique array
// return unique array

function unique(array) {
  var uniqueArray = [...new Set(array)];
  return uniqueArray;
}
