const UpVote = require('../models/UpVote')
const express = require('express')

const router = express.Router()

router
  .get('/up_votes', (_request, response) => {
    UpVote.query()
      .then(up_votes => response.json(up_votes))
  })

  .post('/up_votes', (request, response) => {
    const { up_vote } = request.body

    UpVote.query()
      .insert(up_vote)
      .then(up_vote => response.json(up_vote))    
  })

  .delete('/up_votes/:id', (request, response) => {
    const id = +request.params.id

    UpVote.query()
      .deleteById(id)
  })

module.exports = router