const UpVote = require('../models/UpVote')
const express = require('express')

const router = express.Router()

router
  .get('/up_votes', (_request, response) => {
    UpVote.query()
      .then(up_votes => response.json(up_votes))
  })

module.exports = router