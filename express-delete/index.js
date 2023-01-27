const express = require('express');
const app = express();
const port = 3000;
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
}
);

app.delete('/api/grades/:id', (req, res) => {
  delete grades[Number(req.params.id)];
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log('express server listening on port: 3000');
});
