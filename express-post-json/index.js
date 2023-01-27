const express = require('express');
const app = express();
const port = 3000;
let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
}
);

app.post('/api/grades', (req, res) => {
  req.body.studentId = nextId;
  grades[nextId] = req.body;
  nextId++;
  res.sendStatus(201);
  return grades;
});

app.listen(port, () => {
  console.log(`express server listening on port: ${port}`);
});
