/* exported compact */

// pseudo code
// we need a function that is quite positive in nature
// it doesn't like false, falsy, null, nan, undefined, empty strings, 0 and -0
// we give back the array with the nice things

// pseudo code with codey words

function compact(array) {
  var newArr = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] === true) {
      newArr.push(array[i]);
    } if (i === array.length - 1) {
      return newArr;
    }
  }
  // newArr = [];
  // for (i = 0; i < array.length; i++) {
  //   if (array[i] === {}) {
  //     newArr.push(array[i]);
  //   }
  // }
  // newArr = [];
  // for (i = 0; i < array.length; i++) {
  //   if (array[i] === typeof Number) {
  //     newArr.push(array[i]);
  //   }
  // }

}

// if (array[i] === false || array[i] === null || array[i] === undefined) { } else {
//   newArr.unshift(array[i]);
// }
// if (array[i] === '') { } else { newArr[i] = array[i]; }

// var filterSubject = function (teachers, subject) {
//   var filteredTeachers = [];
//   for (var i = 0; i <= teachers.length - 1; i++) {
//     var teacher = teachers[i];
//     for (var j = 0; j <= teacher.subjects.length - 1; j++) {
//       if (teacher.subjects[j].toLowerCase() == subject.toLowerCase()) {
//         filteredTeachers.push(teacher);
//       }
//     }
//   }
//   return filteredTeachers;
// }
