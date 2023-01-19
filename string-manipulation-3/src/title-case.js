/* exported titleCase */

// pseudocode
// we want to capitalize the first letter of each title word
// use lowercase for those words that dont matter (articles, prepositions)
// hard code javascript and API
// lowercase the string & split each word by space
// make a lot of else if conditionals and use includes, tolowercase, indexof, all that jazz.

function titleCase(title) {
  var noNoWords = ['in', 'for', 'of', 'the', 'an', 'the', 'a', 'as', 'at', 'by', 'on', 'per', 'to', 'and'];
  var splitLowerTitle = title.toLowerCase().split(' ');

  for (var i = 0; i < splitLowerTitle.length; i++) {
    if (splitLowerTitle[i].includes('javascript')) {
      splitLowerTitle[i] = splitLowerTitle[i].charAt(0).toUpperCase() + splitLowerTitle[i].substring(1, 4) + splitLowerTitle[i].charAt(4).toUpperCase() + splitLowerTitle[i].substring(5);
    } else if (i > 0 && splitLowerTitle[i - 1].includes(':')) {
      splitLowerTitle[i] = splitLowerTitle[i].charAt(0).toUpperCase() + splitLowerTitle[i].substring(1);
    } else if (i > 0 && splitLowerTitle[i].includes('-')) {
      var hyphenIndex = splitLowerTitle[i].indexOf('-');
      splitLowerTitle[i] = splitLowerTitle[i].charAt(0).toUpperCase() + splitLowerTitle[i].substring(1, hyphenIndex) + '-' + splitLowerTitle[i].charAt(hyphenIndex + 1).toUpperCase() + splitLowerTitle[i].substring(hyphenIndex + 2);
    } else if (i > 0 && noNoWords.includes(splitLowerTitle[i])) {
      splitLowerTitle[i] = splitLowerTitle[i].toLowerCase();
    } else if (splitLowerTitle[i] === 'api') {
      splitLowerTitle[i] = splitLowerTitle[i].toUpperCase();
    } else {
      splitLowerTitle[i] = splitLowerTitle[i].charAt(0).toUpperCase() + splitLowerTitle[i].substring(1);
    }
  }
  return splitLowerTitle.join(' ');
}
