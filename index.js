const express = require('express')
const cors = require('cors')

const usersController = require('./controllers/users_controller')
const postsController = require('./controllers/posts_controller')
const up_votesController = require('./controllers/up_votes_controller')
const down_votesController = require('./controllers/down_votes_controller')
const favoritesController = require('./controllers/favorites_controller')
const authenticationController = require('./controllers/authentication_controller')

const PORT = process.env.PORT || 3000

const app = express()

//Middleware
app
  .use(express.json())
  .use(cors())

//Endpoints
app
  .get('/', (_request, response) => response.send('NewsApp api'))
  .use('/', postsController)
  .use('/', usersController)
  .use('/', up_votesController)
  .use('/', down_votesController)
  .use('/', favoritesController)

//Server
app
  .listen(PORT, () => console.log(`App listening on port ${PORT}`))