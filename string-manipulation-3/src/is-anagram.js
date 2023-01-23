/* exported isAnagram */

// pseudocode
// a function to see if 2 strings are anagrams of each other
// and we all know what anagrams are
// split the two inputs up into different arrays
// sort the arrays by alphabetical order
// compare if they're equal to each other

function isAnagram(firstString, secondString) {
  var firstNoSpaces = firstString.replace(' ', '');
  var secondNoSpaces = secondString.replaceAll(' ', '');
  var firstArr = firstNoSpaces.split('');
  var secondArr = secondNoSpaces.split('');
  firstArr.sort();
  secondArr.sort();
  var firstStringSorted = firstArr.join();
  var secondStringSorted = secondArr.join();
  if (firstStringSorted === secondStringSorted) {
    return true;
  } else { return false; }
}
