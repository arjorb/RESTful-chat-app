const express = require('express');
const {
  getAllChat,
  getChat,
  createChat,
  updateChat,
  deleteChat,
  deleteAllChats,
} = require('../controllers/chat');

const route = express.Router();

//getting all the chats from mongoDb
route.get('/', getAllChat);

//getting only the chat from mongoDb
route.get('/:id', getChat);

// posting a new chat to mongoDb
route.post('/', createChat);

//update a new chat to mongoDb with the new chat data
route.put('/:id', updateChat);

//delete a chat from mongoDb
route.delete('/:id', deleteChat);

//delete all chat from mongoDb
route.delete('/', deleteAllChats);

module.exports = route;
