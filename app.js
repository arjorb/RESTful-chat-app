const express = require('express');
const mongoose = require('mongoose');
const Chat = require('./models/chat');
const dotenv = require('dotenv').config();
const chatRoute = require('./routes/chat');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

mongoose
  .connect(process.env.dbURI)
  .then(result => console.log('database connected!'))
  .catch(err => console.log(err));
app.use('/chat', chatRoute);

const port = 4000;
app.listen(port, () => {
  console.log(`starting the server on port ${port}`);
});
