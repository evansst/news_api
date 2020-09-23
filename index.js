const express = require('express')
const cors = require('cors')

const usersController = require('./controllers/users_controller')
const postsController = require('./controllers/posts_controller')
const PORT = process.env.PORT || 3000

const app = express()
app
  .use(express.json())
  .use(cors())

//Endpoints
app
  .get('/', (request, response) => response.json({ info: 'Node.js, Express, and Postgres API'}))
  .use('/', usersController)
  .use('/', postsController)

  .listen(PORT, () => console.log(`App listening on port ${PORT}`))