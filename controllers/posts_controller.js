const Post = require('../models/Post');
const express = require('express')

const router = express.Router();

router.get('/posts', (request, response) => {
  Post.query()
    .then(posts => response.json(posts))
})

module.exports = {
  router: router
}