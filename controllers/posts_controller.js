const Post = require('../models/Post')
const express = require('express')

const router = express.Router()

router
  .get('/posts', (_request, response) => {
    Post.query()
      .withGraphFetched('user')
      .withGraphFetched('up_votes')
      .withGraphFetched('down_votes')
      .then(posts => response.json(posts))
  })

  .get('/posts/:id', (request, response) => {
    const id = +request.params.id
    
    Post.query()
      .where('id', id)
      .withGraphFetched('user')
      .withGraphFetched('up_votes')
      .withGraphFetched('down_votes')
      .then(post => response.json(post[0]))
  })

  .post('/posts', (request, response) => {
    const { post } = request.body

    Post.query()
      .insert(post)
      .then(post => response.json(post))
  })

  .delete('/posts/:id', (request, response) => {
    const id = +request.params.id

    try {
      Post.query()
        .deleteById(id)
        .then(post => {
          post 
            ? response.json({ message: "Post Deleted" })
            : response.json({ message: "Item not found"})
        })
      } catch(error) {
        response.json({ error: error })
      }
  })

module.exports = router