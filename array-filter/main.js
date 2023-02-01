const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const overFive = numbers.filter((number) => number > 5);
const startWithE = names.filter((name) => name.startsWith('E'));
const haveD = names.filter((name) => name.includes('D') || name.includes('d'));

console.log(evenNumbers);
console.log(overFive);
console.log(startWithE);
console.log(haveD);
