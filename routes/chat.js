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

//getting only the items from mongoDb

route.get('/:id', (req, res) => {
  Chat.findById(req.params.id)
    .then(result => res.send(result))
    .catch(err => err);
});

// posting a new item to mongoDb

route.post('/', (req, res) => {
  const newChat = new Chat(req.body);
  newChat
    .save()
    .then(result => res.send(result))
    .catch(err => err);
});
