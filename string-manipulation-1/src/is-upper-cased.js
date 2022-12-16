/* exported isUpperCased */

// PseudoCode
// look at the word
// is it all capitalized? yay
// is it not? boo

// Pseudo Codey Code
// beautiful for loop
//     - if the word is equal to the uppercase version of the word, then return true
//     - else, return false

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
