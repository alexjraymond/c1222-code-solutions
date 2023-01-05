/* exported getWords */
// PseudoCode
// look at all the words in the input
// separate them by words
// put each word separately into an array

// Pseudo Codey Code
// define an empty array
// for loop that checks:
// if the character @ index is a space or Not
// adds it to the array's string
// if there is a space
//   skip over that index and start a new word in the array
// return the array

function getWords(string) {
  var wordsArr = [];
  var newWord = '';
  if (string === '') {
    return wordsArr;
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      newWord += string[i];
    } else if (string[i] === ' ') {
      wordsArr.push(newWord);
      newWord = '';
    }
  }
  wordsArr.push(newWord);
  return wordsArr;
}
