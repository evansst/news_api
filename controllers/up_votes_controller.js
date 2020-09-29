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

  .delete('/up_votes', (request, response) => {
    const { user_id, post_id } = request.body

    UpVote
      .query()
      .delete()
      .where('user_id', user_id)
      .where('post_id', post_id)
      .catch(error => response.json({ error: error }))
      .then(down_vote => {
        down_vote
          ? response.json({ message:  'Up vote deleted'})
          : response.json({ message: "Couldn't find that up vote"})
      })
  })

  .delete('/up_votes/:id', (request, response) => {
    const id = +request.params.id

    UpVote.query()
      .deleteById(id)
      .catch(error => response.json({ error: error }))
      .then(up_vote => {
        up_vote
          ? response.json({ message: 'Up vote deleted' })
          : response.json({ message: "Didn't find a up vote"})
      })
  })

module.exports = router