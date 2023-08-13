const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('You are able to acces ths request');
});

const port = 4000;
app.listen(port, () => {
  console.log(`starting the server on port ${port}`);
});
