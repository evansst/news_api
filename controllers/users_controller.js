const User = require('../models/User')
const express = require('express')
const bcrypt = require('bcrypt')

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
    
    bcrypt.hash(user.password, 12, (_error, hashed_password) => {
      User.query()
        .insert({
          username: user.username,
          email: user.email,
          password_digest: hashed_password,
        })
        .then(user => response.json(user))
    })
  })

  .delete('/users/:id', async (request, response) => {
    const id = +request.params.id

    try {
      User
        .query()
        .deleteById(id)
        .then(user => {
          user 
            ? response.json({ message: "User Deleted" })
            : response.json({ message: "Item not found" })
        })
    } catch(error) {
      response.json({ error: error })
    }
  })

module.exports = router