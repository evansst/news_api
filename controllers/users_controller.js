const User = require('../models/User')
const express = require('express')
const bcrypt = require('bcrypt')
const authenticationController = require('./authentication_controller')


const router = express.Router()

router
  .use('/users/authenticate', authenticationController)
  .get('/users', (_request, response) => {
    User
      .query()
      .then(users => response.json(users))
  })
  
  .get('/users/:id', (request, response) => {
    const id = +request.params.id

    User
      .query()
      .where('id', id)
      .withGraphFetched('posts')
      .withGraphFetched('favorites')
      .withGraphFetched('up_votes')
      .withGraphFetched('down_votes')
      .first()
      .then(user => response.json(user))
  })

  .post('/users', (request, response) => {
    const { username, email, password } = request.body
    
    bcrypt.hash(password, 12, (_error, hashed_password) => {
      User
        .query()
        .insert({
          username: username,
          email: email,
          password_digest: hashed_password,
        })
        .catch(error => response.json({ message: 'There is an error!', error: error }))
        .then(user => response.json(user))
    })
  })

  .delete('/users/:id', async (request, response) => {
    const id = +request.params.id

    User
      .query()
      .deleteById(id)
      .catch(error => response.json({ error: error }))
      .then(user => {
        user 
          ? response.json({ message: "User Deleted" })
          : response.json({ message: "Item not found" })
      })
  })

module.exports = router