'use strict';

const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send("First Project by Arun");
=======
  res.send("First Project by Ramarajan");
>>>>>>> 542ce4f02a0c63e80db7db5c5672e2d98ebc3751
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
