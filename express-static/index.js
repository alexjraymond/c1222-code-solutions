const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const filePath = path.join(__dirname, 'public');

app.use(express.static(filePath));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
