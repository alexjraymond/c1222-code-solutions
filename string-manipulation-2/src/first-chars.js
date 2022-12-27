/* exported firstChars */

function firstChars(length, string) {
  var firsts = '';
  var newLength = length;

  if (length > string.length) {
    newLength = string.length;
  }
  for (var i = 0; i < newLength; i++) { firsts += string[i]; }

  return firsts;
}
