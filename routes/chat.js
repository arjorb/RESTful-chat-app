const express = require('express');

const route = express.Router();

//getting routes
route.get('/', (req, res) => {
  res.status(200).send('You are able to acces ths request');
});
module.exports = route;
