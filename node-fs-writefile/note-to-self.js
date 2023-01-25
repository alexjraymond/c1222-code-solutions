const fs = require('fs');

const note = process.argv;
let data = '';
for (var i = 2; i < note.length; i++) {
  const noteArray = note[i];
  data = data + ' ' + noteArray + ' ';
  if (i === note.length - 1) {
    data = data + '\n';
  }
}

fs.writeFile('note.txt', data, err => {
  if (err) throw err;
  console.error('the file was written to!');
});
