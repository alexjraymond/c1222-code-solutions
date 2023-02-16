require('dotenv/config');
const path = require('path');
const pg = require('pg');
const express = require('express');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const uploadsMiddleware = require('./uploads-middleware');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
const publicPath = path.join(__dirname, 'public');

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
}

app.use(express.static(publicPath));
app.use(express.json());

app.post('/api/uploads', uploadsMiddleware, (req, res, next) => {
  const { caption } = req.body;
  if (!caption) {
    throw new ClientError(400, 'caption is a required field');
  }

  const url = '/images/' + req.file.filename;
  const sql = `
    insert into "images" ("caption", "url")
    values ($1, $2)
    returning *
  `;
  const values = [caption, url];
  db.query(sql, values)
    .then((result) => {
      const insertedRow = result.rows[0];
      res.status(201).json(insertedRow);
    })
    .catch((err) => next(err));
});

app.get('/api/images', (req, res) => {
  const sql = `
    select *
      from "images"
  `;
  db.query(sql)
    .then((result) => {
      res.json(result.rows);
    })
    // eslint-disable-next-line no-undef
    .catch((err) => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
