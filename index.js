const express = require('express')
const cors = require('cors')

const usersController = require('./controllers/users_controller')
const postsController = require('./controllers/posts_controller')
const up_votesController = require('./controllers/up_votes_controller')
const down_votesController = require('./controllers/down_votes_controller')
const PORT = process.env.PORT || 3000

const app = express()

//Middleware
app
  .use(express.json())
  .use(cors())

//Endpoints
app
  .get('/', (_request, response) => response.send('NewsApp api'))
  .use('/', usersController)
  .use('/', postsController)
  .use('/', up_votesController)
  .use('/', down_votesController)

//Server
app
  .listen(PORT, () => console.log(`App listening on port ${PORT}`))