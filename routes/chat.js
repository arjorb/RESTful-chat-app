const express = require('express');
const Blog = require('../models/chat');
const route = express.Router();

//getting all the items from mongoDb
route.get('/', (req, res) => {
  Blog.find()
    .then(result => res.send(result))
    .catch(err => err);
});
module.exports = route;

// posting a new item to mongoDb

route.post('/', (req, res) => {
  const newItem = req.body;
  console.log(newItem);
});
