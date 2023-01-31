const json = require('./data.json');
const nextId = json.nextId;
const fs = require('fs');

module.exports = a => {
  json.notes[nextId] = a;
  json.nextId++;
  const data = json;
  const cleanData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', cleanData, err => {
    if (err) throw err;
    console.log('your note has been written');
  });
};
