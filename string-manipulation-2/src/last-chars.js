/* exported lastChars */

// function lastChars(length, string) {
//   var lasts = '';
//   var newLength = length;

//   if (length > string.length) {
//     newLength = string.length;
//   }

//   for (var i = length; i < string.length; i++) { lasts += string[i]; }

//   return lasts;
// }

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
