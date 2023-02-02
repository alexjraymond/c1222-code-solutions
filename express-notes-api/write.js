const fs = require('fs');

module.exports = (path, note) => {
  const cleanData = JSON.stringify(note, null, 2);
  fs.writeFile(path, cleanData, { flag: 'r+' }, (err) => {
    if (err) {
      console.error({ error: 'An unexpected error occurred.' });
    }
  });
};
