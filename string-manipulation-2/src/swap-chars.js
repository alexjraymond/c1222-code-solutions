/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  return string.substring(0, firstIndex) + string[secondIndex] + string.substring(firstIndex + 1, secondIndex) + string[firstIndex] + string.substring(secondIndex + 1);
}
