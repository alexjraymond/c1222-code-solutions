const fs = require('fs');

const desiredFile = process.argv[2];

console.log(desiredFile);

fs.readFile(desiredFile, (err, data) => {
  if (err) throw (err);
  console.log(data.toString());
});
