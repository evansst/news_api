const Post = require('../models/Post')
const express = require('express')

const router = express.Router()

router
  .get('/posts', (_request, response) => {
    Post.query()
      .withGraphFetched('user')
      .withGraphFetched('up_votes')
      .withGraphFetched('down_votes')
      .withGraphFetched('favorites')
      .then(posts => response.json(posts))
  })

  .get('/posts/:id', (request, response) => {
    const id = +request.params.id
    
    Post.query()
      .where('id', id)
      .withGraphFetched('user')
      .withGraphFetched('up_votes')
      .withGraphFetched('down_votes')
      .withGraphFetched('favorites')
      .catch(error => response.status(500).send(error))
      .then(post => response.json(post[0]))
  })

  .post('/posts', (request, response) => {
    const { post } = request.body

    Post.query()
      .insert(post)
      .catch(error =>{
        console.log(error)
        response.status(500).send(error) 
      })
      .then(newPost => response.json(newPost))
  })

  .delete('/posts/:id', (request, response) => {
    const id = +request.params.id
    Post.query()
      .deleteById(id)
      .then(post => {
        post 
          ? response.json({ message: "Post Deleted" })
          : response.json({ message: "Item not found"})
      })
  })

module.exports = router