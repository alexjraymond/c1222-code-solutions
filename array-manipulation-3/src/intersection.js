/* exported intersection */
// psuedocode
// the opposite of difference.js
// we'll just remove the ! from difference.js
// 2 for loops, one checking for if first array includes second at index
// other loop checking if second array includes first at index
// append those to a new blank array
// use set to have it only be solo things
// return new array;

function intersection(first, second) {
  var thatArray = [];

  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      thatArray.push(first[i]);
    }
  }
  for (var k = 0; k < second.length; k++) {
    if (first.includes(second[k])) {
      thatArray.push(second[k]);
    }
  }
  thatArray = [...new Set(thatArray)];
  return thatArray;

}
