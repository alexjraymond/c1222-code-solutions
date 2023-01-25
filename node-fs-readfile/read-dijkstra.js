const fs = require('fs');

fs.readFile('dijkstra.txt', (err, data) => {
  if (err) throw (err);
  console.log(data.toString());
});
