const express = require('express');
const app = express();
// eslint-disable-next-line no-unused-vars
const port = 3000;

app.use(function (req, res, next) {
  console.log('Time:', Date.now());

  next();

  // res.send
});

app.use(function (req, res) {
  res.send('hello world');
  console.log(req.method);
});

app.listen(3000, () => {
  console.log('express server listening on port: 3000');
});
