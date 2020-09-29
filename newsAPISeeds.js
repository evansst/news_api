const NewsAPI = require('newsapi')
const newsapi = new NewsAPI('69116889d165485dafe65876b451a81e')

const User = require('./models/User')

const faker = require('faker')
const bcrypt = require('bcrypt')
const Post = require('./models/Post')

async function doSeeds() {
  for(let i = 1; i < 20; i++) {
    const randomCard = faker.helpers.contextualCard()
    const password = faker.internet.password()
    const hash = bcrypt.hashSync(password, 12)
    let user = {}
    let articles = []

    await newsapi.v2.everything({
      q: 'fantasy football',
      language: 'en',
      page: i
    }).then(response => articles = response.articles)
  
    await User
      .query()
      .insert({
        username: randomCard.username,
        email: randomCard.email,
        password_digest: hash,
      })
      .then(newUser => {
        user = newUser
        return user
      })
      .then(console.log)
    
    for(let article of articles){
      await Post
        .query()
        .insert({
          user_id: user.id,
          url: article.url,
          title: article.title
        }).then(console.log)
    }
  }

}

doSeeds()
