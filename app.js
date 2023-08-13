const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const chatRoute = require('./routes/chat');
const app = express();

mongoose
  .connect(process.env.dbURI)
  .then(result => console.log('database connected!'))
  .catch(err => console.log(err));
app.use('/', chatRoute);

const port = 4000;
app.listen(port, () => {
  console.log(`starting the server on port ${port}`);
});
