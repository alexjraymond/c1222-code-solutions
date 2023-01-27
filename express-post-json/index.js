const express = require('express');
const app = express();
const port = 3000;
// const fsPromises = require('fs').promises;
let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
}
);

app.use(express.json());

app.post('/api/grades', (req, res) => {

  grades[nextId] = req.body;
  nextId++;
  res.sendStatus(201);
});

app.listen(port, () => {
  console.log('express server listening on port: 3000');
});
