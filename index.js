const express = require('express');
const PORT = process.env.PORT || 3000

const app = express()

//Endpoints
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API'})
})

app.use('/', require('./controllers/users_controller').router)
app.use('/', require('./controllers/posts_controller').router)


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})