const express = require('express');
const mongoose = require('mongoose');
const Chat = require('./models/chat');
const dotenv = require('dotenv').config();
const chatRoute = require('./routes/chat');
const app = express();

mongoose
  .connect(process.env.dbURI)
  .then(result => console.log('database connected!'))
  .catch(err => console.log(err));
app.use('/', chatRoute);

app.get('/api', (req, res) => {
  const newChat = new Chat({
    sender: 'John',
    receiver: 'Clever',
    message: 'Be careful with this message and send it to the server instead.',
  });

  newChat
    .save()
    .then(result => res.send(result))
    .catch(err => res.send(err));
});
const port = 4000;
app.listen(port, () => {
  console.log(`starting the server on port ${port}`);
});
