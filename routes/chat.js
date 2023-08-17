const express = require('express');
const Chat = require('../models/chat');
const route = express.Router();

//getting all the items from mongoDb
route.get('/', (req, res) => {
  Chat.find()
    .then(result => res.send(result))
    .catch(err => err);
});
module.exports = route;

// posting a new item to mongoDb

route.post('/', (req, res) => {
  const newChat = new Chat(req.body);
  newChat
    .save()
    .then(result => res.send(result))
    .catch(err => err);
});
