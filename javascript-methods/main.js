var one = 1;
var two = 2;
var three = 3;

var maximumValue = Math.max(one, two, three);

console.log('maximum value variable is ', maximumValue);

var heroes = ['deadpool', 'batman', 'spiderman', 'wanda'];

var randomNumber = Math.random();

randomNumber = heroes.length * randomNumber;

var randomIndex = Math.floor(randomNumber);

console.log('random index', randomIndex);

var randomHero = heroes[randomIndex];

console.log('random hero', randomHero);

// Array Methods

var redRising = {
  title: 'Red Rising',
  author: 'Pierce Brown'
};

var leviathanWakes = {
  title: 'Leviathan Wakes',
  author: 'James S. A. Corey'
};

var bestFriends = {
  title: 'The Best of Friends',
  author: 'Lucinda Berry'
};

var library = [redRising, leviathanWakes, bestFriends];

var lastBook = library.pop();

console.log('the last book in library is', lastBook);

var firstBook = library.shift();

console.log('the first book in the library is', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('only js and css should remain dear god i hope i did it right', library);

// String Methods

var fullName = 'Alex Raymond';

var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName value: ', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('saymyname: ', sayMyName);
