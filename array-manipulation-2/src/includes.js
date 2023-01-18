/* exported includes */

// psueodocode
// if the array contains the values inputted by User, then we return true
// simply do a for loop for if the value is equal to array at index
// otherwise we return false, also we return false if the length is 0

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
