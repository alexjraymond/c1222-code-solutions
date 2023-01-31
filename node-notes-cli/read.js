const json = require('./data.json');

module.exports = a => {
  for (const key in json.notes) {
    console.log(key, json.notes[key]);
  }
};
