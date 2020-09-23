const UpVote = require('../models/UpVote')
const express = require('express')

const router = express.Router()

router
  .get('/down_votes', (_request, response) => {
    UpVote.query()
      .then(down_votes => response.json(down_votes))
  })

module.exports = router