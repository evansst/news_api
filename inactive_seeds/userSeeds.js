const User = require('./models/User')
const faker = require('faker')
const bcrypt = require('bcrypt')

async function doSeeds() {
  for(let i = 1; i < 120; i++) {
    const randomCard = faker.helpers.contextualCard()
    const password = faker.internet.password()
    const hash = bcrypt.hashSync(password, 12)

    await User
      .query()
      .insert({
        username: randomCard.username,
        email: randomCard.email,
        password_digest: hash,
      })
      .then(console.log)
  }
  console.log('DONE!')
}

doSeeds()