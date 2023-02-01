const express = require('express');
const app = express();
const port = 3000;
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(express.json());

// app.get('/api/grades/:gradeId', (req, res, next) => {
//   const gradeId = Number(req.params.gradeId);
//   if (!Number.isInteger(gradeId) || gradeId <= 0) {
//     res.status(400).json({
//       error: 'grade id must be positive integer',
//     });
//     // eslint-disable-next-line no-useless-return
//     return;
//   }
//   const sql = `
//   select "gradeId",
//           "name",
//           "course",
//           "score",
//           "createdAt"
//     from  "grades"
//     where "gradeId" = $1
//     `;
//   const params = [gradeId];
//   db.query(sql, params)
//     .then((result) => {
//       const grade = result.rows[0];
//       if (!grade) {
//         res.status(404).json({
//           error: `cannot find grade with grade id ${gradeId}`,
//         });
//       } else {
//         res.json(grade);
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({
//         error: 'An unexpected error occurred',
//       });
//     });
// });

app.get('/api/grades', (req, res) => {
  console.log('test hi');
  const sql = 'select * from grades';
  db.query(sql, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'unexpected error occurred' });
      console.error();
      return;
    }
    res.status(200).json(results.rows);
  });
});

// db.query(sql, params)
//   .then((result) => {
//     const grades = result.rows;
//     if (grades) {
//       res.status(200).json(grades);
//     }
//   })
//   .catch((err) => {
//     console.error(err);
//     res.sendStatus(500).json({
//       error: 'an Unexpected error occurred',
//     });
//   });

app.listen(port, () => {
  console.log(`express server listening on port: ${port}`);
});
