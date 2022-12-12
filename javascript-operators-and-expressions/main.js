var width = 10;
var height = 5;
var area = width * height;

console.log('the area is:', area);
console.log('area typeof is:', typeof area);

var bill = 20;
var payment = 25;
var change = payment - bill;

console.log('the change is:', change);
console.log('change typeof is:', typeof change);

var quizzes = 70;
var midterm = 80;
var final = 90;

var grade = (quizzes + midterm + final) / 3;

console.log('your grade is:', grade, 'not bad');
console.log('grade typeof is:', typeof grade);

var firstName = 'Alex';
var lastName = 'Raymond';
var fullName = firstName + ' ' + lastName;

console.log('my name is:', fullName);
console.log('fullName typeof is:', typeof fullName);

var pH = 8;
var isAcidic = pH < 7;
console.log('is isAcidic acidic?:', isAcidic);
console.log('isAcidic typeof is:', typeof isAcidic);

var headCount = 15;
var isSparta = headCount === 300;

console.log('is this sparta', isSparta);
console.log('isSparta typeof is:', typeof isSparta);

var motto = fullName;
motto += ' is the GOAT';

console.log('motto value', motto);
console.log('motto typeof is:', typeof motto);
