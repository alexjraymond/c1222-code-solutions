/* exported toObject */

// PseudoCode
// we take in an array and make it an Object
// then we return the new Object

// PseudoCode with Codey Words
// define new blank Object
//  since our input arrays have a length of 2, we can just use array[0] for key and array[1] for value
// use bracket notation to push it out

function toObject(keyValuePair) {
  var newObj = {};
  var newKey = keyValuePair[0];
  var newValue = keyValuePair[1];
  newObj[newKey] = newValue;

  return newObj;
}
