/* exported capitalizeWords */

function capitalizeWords(string) {
  var lowString = string.toLowerCase();
  var finalString = lowString[0].toUpperCase();
  for (var i = 1; i < lowString.length; i++) {
    if (lowString[i] === ' ') {
      finalString += lowString[i];
      finalString += lowString[i + 1].toUpperCase();
      i++;
    } else { finalString += lowString[i]; }
  } return finalString;
}
