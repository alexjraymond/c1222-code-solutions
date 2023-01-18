/* exported lastChars */

// pseudocode
// take in the length # and the desired string
// have the desired length we want to be the string's length minus the length # input
// if the length input is longer than string input length, return the string
// starting at the desired length, we for loop the string and append the desired letters up to the string's length
// return that desired letters variable

function lastChars(length, string) {
  var desiredLength = string.length - length;
  var lastCharsString = '';
  if (length > string.length) {
    return string;
  } else {
    for (var i = desiredLength; i < string.length; i++) {
      lastCharsString += string[i];
    }

    return lastCharsString;
  }
}
