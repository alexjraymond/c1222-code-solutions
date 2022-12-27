/* exported truncate */
// pseudocode
// we have a word or group of words that we take in
// we cut them off at a point given to us
// we add ...
// we spit back out the shortened word/words with the ...

// pseudocode with codey words
// function has 2 parameters
// define a new variable equal to the input string, use the substring method
// add the ellipses on the end
// spit that

function truncate(length, string) {
  var truncString = string.substring(0, length) + '...';
  return truncString;
}
