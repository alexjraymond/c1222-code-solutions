/* exported firstChars */

// pseudocode
// take in the length # and the desired string
// if the length # is bigger than the string's length, set the length to the string length
// loop through the string and append everything up to the string length into a new variable
// return that new variable

function firstChars(length, string) {
  var firsts = '';
  var newLength = length;

  if (length > string.length) {
    newLength = string.length;
  }
  for (var i = 0; i < newLength; i++) { firsts += string[i]; }

  return firsts;
}
