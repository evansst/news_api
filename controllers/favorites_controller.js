const Favorite = require('../models/Favorite')
const express = require('express')

const router = express.Router()

router
  .get('/favorites', (_request, response) => {
    Favorite
      .query()
      .then(favorites => response.json(favorites))
  })

  .post('/favorites', (request, response) => {
    const { favorite } = request.body

    Favorite
      .query()
      .insert(favorite)
      .catch(error => response.json({ error: error }))
      .then(favorite => response.json(favorite))
  })

  .delete('/favorites', (request, response) => {
    const { user_id, post_id } = request.body

    Favorite
      .query()
      .delete()
      .where('user_id', user_id)
      .where('post_id', post_id)
      .catch(error => response.json({ error: error }))
      .then(favorite => {
        favorite
          ? response.json({ message: `${favorite} deleted`})
          : response.json({ message: `Couldn't find that favorite`})
      })
  })

  .delete('/favorites/:id', (request, response) => {
    const id = +request.params.id

    Favorite
      .query()
      .deleteById(id)
      .catch(error => response.json({ error: error }))
      .then(favorite => {
        favorite
          ? response.json({ message: 'Favorite deleted'})
          : response.json({ message: "Didn't find a favorite" })
      })
  })



  module.exports = router