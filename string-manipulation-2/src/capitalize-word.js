/* exported capitalizeWord */
// pseudocode
// take in the string
// make it all lowercase
// uppercase the first letter
// if the lowercase = javascript, turn it into JavaScript
// return the new string

// pseudocode with codey words
// function w/ 1 parameter
// use toLowerCase method to make string lowercase
// make variable to get just 1st letter capitalized
// use toUppercase method to capitalize first letter
// if statement for if lowercase word is === javascript
// make that equal to JavaScript, else just print word

function capitalizeWord(word) {
  var lowWord = word.toLowerCase();
  var newWord = lowWord[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  if (lowWord === 'javascript') {
    return 'JavaScript';
  } else {
    return newWord;
  }
}
