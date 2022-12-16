/* exported isVowel */

// PseudoCode
// we look at the single character
// is it a, e, i, o, u? yay
// is it a boring consonant? boo

// Pseudo Codey Code
// set every letter to lowercase
// if statement -> if string == a or e or i or o or u
// then we return true
// else we return false

function isVowel(character) {
  var lowerLetter = character.toLowerCase();
  if (lowerLetter === 'a' || lowerLetter === 'i' || lowerLetter === 'o' || lowerLetter === 'u' || lowerLetter === 'e') {
    return true;
  } else {
    return false;
  }
}
