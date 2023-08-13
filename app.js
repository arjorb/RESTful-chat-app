const express = require('express');
const chatRoute = require('./routes/chat');
const app = express();

app.use('/', chatRoute);

const port = 4000;
app.listen(port, () => {
  console.log(`starting the server on port ${port}`);
});
