var colors = ['red', 'white', 'blue'];

console.log('value of colors[0]', colors[0]);
console.log('value of colors[1]', colors[1]);
console.log('value of colors[2]', colors[2]);

var muricuh = 'America is ' + colors[0] + ', ' + colors[1] + ' and ' + colors[2];

console.log(muricuh);

colors[2] = 'green';

var mexico = 'Mexico is ' + colors[0] + ', ' + colors[1] + ' and ' + colors[2];
console.log(mexico);
console.log('colors array is now', colors);

var students = ['alex', 'jacob', 'raymond', 'nicole'];

var numberOfStudents = students.length;
console.log('there is this many students in the array', numberOfStudents);

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];

console.log('the last student is ', lastStudent);
console.log('students array', students);
