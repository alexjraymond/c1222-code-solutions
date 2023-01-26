const json = require('./data.json');
const fs = require('fs');

module.exports = a => {
  delete json.notes[a];
  const data = json;
  const cleanData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', cleanData, err => {
    if (err) throw err;
    console.log('your note has been deleted');
  });
};
