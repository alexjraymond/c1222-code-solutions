/* exported ransomCase */
// pseudocode
// bring in the word
// lowercase the word
// do math to uppercase every other word
// victory

// pseudocode with codey words
// new variable = lowercase method of input
// for loop if i in string index != divided by 2 then we capitalize
// append to new word
// else, just append to new word

function ransomCase(string) {
  var lowWord = string.toLowerCase();
  var newWord = '';
  for (var i = 0; i < lowWord.length; i++) {
    if (lowWord.indexOf(lowWord[i], i) % 2 !== 0) {
      newWord += lowWord[i].toUpperCase();
    } else { newWord += lowWord[i]; }
  }
  return newWord;
}
