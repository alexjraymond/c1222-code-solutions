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

app.get('/api/grades/:gradeId', (req, res, next) => {
  // validate the "inputs" FIRST
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    // there is no way that a matching grade could be found
    // so we immediately respond to the client and STOP the code
    // with a return statement
    res.status(400).json({
      error: '"gradeId" must be a positive integer',
    });
    return;
  }
  // Ok, the input is reasonable, time to query the database.
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;
  // 👆 We are NOT putting the user input directly into our query
  const params = [gradeId];
  // 👆 instead, we are sending the user input in a separate array
  /**
   * review the documentation on parameterized queries here:
   * https://node-postgres.com/features/queries#parameterized-query
   * you'll be using this information to prevent SQL injection attacks
   *
   * https://www.youtube.com/watch?v=_jKylhJtPmI
   */
  db.query(sql, params)
    .then((result) => {
      // the query succeeded, even if nothing was found
      // the Result object will include an array of rows
      // see the docs on results
      // https://node-postgres.com/api/result
      const grade = result.rows[0];
      if (!grade) {
        // we could not have known ahead of time without actually querying the db
        // but the specific grade being requested was not found in the database
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`,
        });
      } else {
        // the specific grade was found in the database, yay!
        res.json(grade);
      }
    })
    .catch((err) => {
      // the query failed for some reason
      // possibly due to a syntax error in the SQL statement
      // print the error to STDERR (the terminal) for debugging purposes
      console.error(err);
      // respond to the client with a generic 500 error message
      res.status(500).json({
        error: 'An unexpected error occurred.',
      });
    });
});

app.listen(port, () => {
  console.log(`express server listening on port: ${port}`);
});
