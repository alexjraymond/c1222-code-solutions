var student = {
  firstName: 'Alex',
  lastName: 'Raymond',
  age: '29'
};
console.log('student object', student);

var fullName = student.firstName + ' ' + student.lastName;
console.log('full name', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'music producer';
console.log('lives in irvine?', student.livesInIrvine);
console.log('previous occupation', student.previousOccupation);

var vehicle = {
  make: 'Mazda',
  model: 'CX5',
  year: 2017
};

vehicle['color'] = 'space grey';
vehicle['isConvertible'] = false;

console.log('i love my car', vehicle);

var pet = {
  name: 'Gale',
  type: 'Clownfish'
};

delete pet.name;
delete pet.type;

console.log('pet after deletes', pet);
