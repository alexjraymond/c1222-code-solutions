/* exported capitalize */

// PseudoCode
// I need to take in the word
// set everything to lower case
// capitalize the first letter of the word
// return the word

// PseudoCode with codey words
// new variable for the finished word - initialize it with capitalizing first letter
//  for loop  starting after 1st letter to automatically lowercase everything
//      -assign that to the new variable
// return new variable

function capitalize(word) {
  var newWord = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }

  return newWord;
}
