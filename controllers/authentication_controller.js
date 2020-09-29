const User = require('../models/User')
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const router = express.Router()

router
  .post('/', (request, response) => {
    const { username, password } = request.body

    User.query()
      .where('username', username)
      .withGraphFetched('posts')
      .withGraphFetched('favorites')
      .withGraphFetched('up_votes')
      .withGraphFetched('down_votes')
      .first()
      .catch(error => response.status(500).send(error))
      .then(user => {
        if(!user) response.status(403).send("Can't find your username")

        bcrypt.compare(password, user.password_digest, (error, result) => {
          if (result) {
            const payload = { user_id: user.id }
            const token = jwt.sign(payload, 'super secret string')
            user.token = token
            response.json({ user })
          } else {
            response.status(403).send(error)
          }
        })
      })
  })

  module.exports = router