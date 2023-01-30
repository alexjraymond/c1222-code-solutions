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
  const newGrade = req.body;
  newGrade.studentId = nextId;
  grades[nextId] = newGrade;
  nextId++;
  res.status(201).json(newGrade);
});

app.listen(port, () => {
  console.log(`express server listening on port: ${port}`);
});
