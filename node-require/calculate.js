const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const commandLineInput = process.argv;

const operator = commandLineInput[3];
const firstNumber = parseInt(commandLineInput[2]);
const secondNumber = parseInt(commandLineInput[4]);
let result = 0;

if (operator === 'plus') {
  result = add(firstNumber, secondNumber);
} else if (operator === 'minus') {
  result = subtract(firstNumber, secondNumber);
} else if (operator === 'over') {
  result = divide(firstNumber, secondNumber);
} else if (operator === 'time') {
  result = multiply(firstNumber, secondNumber);
}

console.log(result);
