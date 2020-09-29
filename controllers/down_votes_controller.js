const DownVote = require('../models/DownVote')
const express = require('express')

const router = express.Router()

router
  .get('/down_votes', (_request, response) => {
    DownVote
      .query()
      .then(down_votes => response.json(down_votes))
  })

  .post('/down_votes', (request, response) => {
    const { down_vote } = request.body

    DownVote
      .query()
      .insert(down_vote)
      .catch(error => response.json({ error: error }))
      .then(down_vote => response.json(down_vote))
  })

  .delete('/down_votes', (request, response) => {
    const { user_id, post_id } = request.body

    DownVote
      .query()
      .delete()
      .where('user_id', user_id)
      .where('post_id', post_id)
      .catch(error => response.json({ error: error }))
      .then(down_vote => {
        down_vote
          ? response.json({ message:  'Down vote deleted'})
          : response.json({ message: "Couldn't find that down vote"})
      })
  })

  .delete('/down_votes/:id', (request, response) => {
    const id = +request.params.id

    DownVote
      .query()
      .deleteById(id)
      .catch(error => response.json({ error: error }))
      .then(down_vote => {
        down_vote
          ? response.json({ message: 'Down vote deleted' })
          : response.json({ message: "Didn't find a down vote"})
      })
  })

module.exports = router