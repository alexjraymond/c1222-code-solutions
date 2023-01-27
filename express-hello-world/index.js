const express = require('express');
const app = express();
// eslint-disable-next-line no-unused-vars
const port = 3000;

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
  // res.send
});
