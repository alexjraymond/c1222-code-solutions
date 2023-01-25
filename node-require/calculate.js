const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const argvs = process.argv;

const argv = argvs.slice();

const operator = argv[3];
const firstNumber = parseInt(argv[2]);
const secondNumber = parseInt(argv[4]);

if (operator === 'plus') {

  console.log(add.add(firstNumber, secondNumber));
} else if (operator === 'minus') {

  console.log(subtract.subtract(firstNumber, secondNumber));
} else if (operator === 'over') {
  console.log(divide.divide(firstNumber, secondNumber));
} else if (operator === 'time') {
  console.log(multiply.multiply(firstNumber, secondNumber));
}
