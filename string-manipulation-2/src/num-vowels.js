/* exported numVowels */

function numVowels(string) {
  var lowString = string.toLowerCase();
  var vowelCount = 0;
  for (var i = 0; i < lowString.length; i++) {
    if (lowString[i] === 'a' || lowString[i] === 'i' || lowString[i] === 'o' || lowString[i] === 'u' || lowString[i] === 'e') {
      vowelCount++;
    }

  }
  return vowelCount;
}
