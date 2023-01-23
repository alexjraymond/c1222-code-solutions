/* exported capitalizeWords */

// pseudocode
// take in the string
// make it all lowercase
// uppercase the first letter of each word
// if the if there's a space, prepare to uppercase next letter
// return the new string

// pseudocode with codey words
// function w/ 1 parameter
// use toLowerCase method to make string lowercase
// make variable to get just 1st letter capitalized
// use toUppercase method to capitalize first letter
// if statement for if lowercaseString is === ' '
// do [i+1] and set it to uppercase

function capitalizeWords(string) {
  var lowString = string.toLowerCase();
  var finalString = lowString[0].toUpperCase();
  for (var i = 1; i < lowString.length; i++) {
    if (lowString[i] === ' ') {
      finalString += lowString[i];
      finalString += lowString[i + 1].toUpperCase();
      i++;
    } else { finalString += lowString[i]; }
  } return finalString;
}
