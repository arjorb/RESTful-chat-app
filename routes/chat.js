const express = require('express');
const Chat = require('../models/chat');
const route = express.Router();

//getting all the chats from mongoDb
route.get('/', (req, res) => {
  Chat.find()
    .then(result => res.send(result))
    .catch(err => err);
});
module.exports = route;

//getting only the chat from mongoDb

route.get('/:id', (req, res) => {
  Chat.findById(req.params.id)
    .then(result => res.send(result))
    .catch(err => err);
});

// posting a new chat to mongoDb

route.post('/', (req, res) => {
  const newChat = new Chat(req.body);
  newChat
    .save()
    .then(result => res.send(result))
    .catch(err => err);
});

//update a new chat to mongoDb with the new chat data

route.put('/:id', (req, res) => {
  Chat.updateOne({ _id: req.params.id }, req.body)
    .then(result => res.send('Updated chat successfully'))
    .catch(err => err);
});

//delete a new chat from mongoDb
route.delete('/:id', (req, res) => {
  Chat.deleteOne({ _id: req.params.id })
    .then(result => res.send('Deleted chat successfully'))
    .catch(err => err);
});
