const express = require('express');
const Blog = require('../models/chat');
const route = express.Router();

//getting routes
route.get('/', (req, res) => {
  const getChat = Blog.find().then(result => res.json(result));
});
module.exports = route;
