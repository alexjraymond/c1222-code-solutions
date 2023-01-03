/* exported includes */

function includes(array, value) {
  if (array.length === 0) { return false; } else {
    for (var i = 0; i < array.length; i++) {
      if (value === array[i]) {
        return true;
      }

    }
    return false;
  }
}
