const User = require('../models/User');
const express = require('express');

const router = express.Router();

router.get('/users', (request, response) => {
  User.query()
    .then(users => response.json(users))
})

router.get('/users/:id', (request, response) => {
  const id = +request.params.id

  User.query()
    .where('id', id)
    .withGraphFetched('posts')
    .then(user => response.json(user))
})

module.exports = {
  router: router
}