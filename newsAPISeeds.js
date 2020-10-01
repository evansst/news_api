const NewsAPI = require('newsapi')
const newsapi = new NewsAPI('69116889d165485dafe65876b451a81e')

const User = require('./models/User')

const faker = require('faker')
const bcrypt = require('bcrypt')
const Post = require('./models/Post')

let categories = [
  'Style',
  'Travel',
  'Social',
  'Politics',
  'Business',
  'Science',
  'Art',
  'Sports',
  'Entertainment',
  'Health',
  'Technology',
]

async function doSeeds() {
  categories = categories.sort(() => Math.random() - 0.5)

  for(const category of categories)  {
    for(let i = 1; i < 5; i++) {
      const randomCard = faker.helpers.contextualCard()
      const password = faker.internet.password()
      const hash = bcrypt.hashSync(password, 12)
      let user = {}
      let articles = []
  
      await newsapi.v2.everything({
        q: category,
        language: 'en',
        contry: 'us',
        page: i
      }).then(response => {
        articles = articles.concat(response.articles)
      })
  
      await newsapi.v2.topHeadlines({
        q: category,
        language: 'en',
        country: 'us'
      }).catch(console.log)
        .then(response => {
          articles = articles.concat(response.articles)
        })
    
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
      
      for(let article of articles){
        await Post
          .query()
          .insert({
            user_id: user.id,
            url: article.url,
            title: article.title,
            description: article.description,
            date_published: article.publishedAt,
            content_type: 'Article',
            category: category
          })
          .catch(error => error)
      }
    }
    posts = (await Post.query()).length
    console.log(`Total Posts` + posts)

  }
  console.log('DONE!')
}

doSeeds()
