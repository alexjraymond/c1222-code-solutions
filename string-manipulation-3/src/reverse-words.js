/* exported reverseWords */

// pseudocode
// reverse all the letters of words in a Sentence... but the words stay in the same order
// split the string by spaces
// put each word into its own array
// reverse the array
// join back up the words

function reverseWords(string) {
  var stringArray = string.split(' ').map(word => word.split('').reverse().join(''));
  return stringArray.join(' ');
}
