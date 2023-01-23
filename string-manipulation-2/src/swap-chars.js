/* exported swapChars */

// pseudocode
// we want to swap the characters at desired indexes given by the user for the string, also given by the user
// big ol' substring method abuse
// start with the string at 0 index, up to firstIndex parameter (substring it), add the string at secondIndex, substring first index plus one then second index ...
// ... add string at first index, then substring second index plus 1
// return all of that ^

function swapChars(firstIndex, secondIndex, string) {
  return string.substring(0, firstIndex) + string[secondIndex] + string.substring(firstIndex + 1, secondIndex) + string[firstIndex] + string.substring(secondIndex + 1);
}
