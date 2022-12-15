/* exported filterOutStrings */
function filterOutStrings(values) {
  var newArr = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      newArr.push(values[i]);
    }
  }

  return newArr;
}

// if (values[i] !== values.filter(values[i] => typeof values[i] === 'string')) {
// if values[i] !== values.filter(String);
