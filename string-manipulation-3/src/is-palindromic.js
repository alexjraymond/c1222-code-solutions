/* exported isPalindromic */

// psuedocode
// we need to check if the word can be spelt the same backwards and forwards
// a lot of string methods will be used
// remove spaces from string, split it up into an array, reverse it, rejoin
// if theyre the same then true, else false

function isPalindromic(string) {
  var noSpaces = string.replace(' ', '');
  var arrString = noSpaces.split('');
  var reverseArrString = arrString.reverse();
  var reverseString = reverseArrString.join('');

  if (noSpaces === reverseString) {
    return true;
  } else {
    return false;
  }

}
