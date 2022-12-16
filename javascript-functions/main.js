function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log('i am converting 5 minutes to seconds', convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

console.log('greeting function', greet('george'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log('the area of a 5 by 5 square is ', getArea(5, 5));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

console.log('their first name is', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

console.log('the last element in the array is', getLastElement(['propane', 'and', 'propane', 'accessories']));
