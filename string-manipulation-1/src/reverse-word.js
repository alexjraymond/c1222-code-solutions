/* exported reverseWord */
// PseudoCode
// we take the last letter and put it at the front

// PseudoCode with codey words
// define empty array
// for loop
//    -unshift the letters into our empty array
// define a new variable and have it = our array with dot join method
// return new variable

function reverseWord(word) {
  var backArr = [];
  for (var i = 0; i < word.length; i++) {
    backArr.unshift(word[i]);
  }
  var backWord = backArr.join('');
  return backWord;

}
