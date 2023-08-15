const express = require('express');
const Blog = require('../models/chat');
const route = express.Router();

//getting routes
route.get('/', (req, res) => {
  Blog.find()
    .then(result => res.send(result))
    .catch(err => err);
});
module.exports = route;
