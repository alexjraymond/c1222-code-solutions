/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArr = [];
  for (var i = 0; i < words.length; i++) {
    newArr.push(words[i] + suffix);
  }
  return newArr;
}
