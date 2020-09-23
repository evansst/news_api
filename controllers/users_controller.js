const User = require('../models/User')
const express = require('express')

const router = express.Router()

router
  .get('/users', (_request, response) => {
    User.query()
      .then(users => response.json(users))
  })
  
  .get('/users/:id', (request, response) => {
    const id = +request.params.id

    User.query()
      .where('id', id)
      .withGraphFetched('posts')
      .withGraphFetched('favorites')
      .withGraphFetched('up_votes')
      .withGraphFetched('down_votes')
      .then(user => response.json(user[0]))
  })

  .post('/users', (request, response) => {
    const { user } = request.body

    User.query()
      .insert(user)
      .then(user => response.json(user))
  })

module.exports = router