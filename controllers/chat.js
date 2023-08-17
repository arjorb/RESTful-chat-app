const Chat = require('../models/chat');

const getAllChat = (req, res) => {
  Chat.find()
    .then(result => res.send(result))
    .catch(err => err);
};
const getChat = (req, res) => {
  Chat.findById(req.params.id)
    .then(result => res.send(result))
    .catch(err => err);
};
const createChat = (req, res) => {
  const newChat = new Chat(req.body);
  newChat
    .save()
    .then(result => res.send(result))
    .catch(err => err);
};
const updateChat = (req, res) => {
  Chat.updateOne({ _id: req.params.id }, req.body)
    .then(result => res.send('Updated chat successfully'))
    .catch(err => err);
};
const deleteChat = (req, res) => {
  Chat.deleteOne({ _id: req.params.id })
    .then(result => res.send('Deleted chat successfully'))
    .catch(err => err);
};

module.exports = { getAllChat, getChat, createChat, updateChat, deleteChat };
