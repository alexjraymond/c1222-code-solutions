/* exported getStudentNames */
function getStudentNames(students) {
  var justNames = [];
  for (var i = 0; i < students.length; i++) {
    justNames.push(students[i].name);
  }
  return justNames;
}
