const fs = require('fs');
const random = Math.random();
const data = random.toString() + '\n';

fs.writeFile('random.txt', data, err => {
  if (err) throw err;
  console.error('the file was written to!');
});
