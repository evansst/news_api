const Post = require('../models/Post');
const express = require('express');

const router = express.Router();

router
  .get('/posts', (request, response) => {
    Post.query()
      .then(posts => response.json(posts))
  })
  
  .get('/posts/:id', (request, response) => {
    const id = +request.params.id
    
    Post.query()
      .where('id', id)
      .then(post => response.json(post[0]))
  })

  .post('/posts', (request, response) => {
    const { post } = request.body

    Post.query()
      .insert(post)
      .then(post => response.json(post))
  })

module.exports = router