/* exported numVowels */

// psueodocode
// set the string input to lowercase
// have a vowel counter set at 0
// big for loop + if statement to check if string at [i] is equal to a,e,i,o, or 'u'
// if they are, vowelcount plus plus
// return vowelcount

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
