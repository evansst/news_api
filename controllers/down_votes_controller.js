
const DownVote = require('../models/DownVote')
const express = require('express')

const router = express.Router()

router
  .get('/down_votes', (_request, response) => {
    UpVote.query()
      .then(down_votes => response.json(down_votes))
  })

  .post('/down_votes', (request, response) => {
    const { down_vote } = request.body

    DownVote.query()
      .insert(down_vote)
      .then(down_vote => response.json(down_vote))
  })

module.exports = router