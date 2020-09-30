const User = require('./models/User')
const Post = require('./models/Post')
const UpVote = require('./models/UpVote')
const DownVote = require('./models/DownVote')
const Favorite = require('./models/Favorite')

async function doSeeds() {
  let users = []
  let posts = []

  await User
    .query()
    .then(response => users = response)
  await Post
    .query()
    .then(response => posts = response)

  for(const user of users) {
    posts = posts.sort(() => Math.random() - 0.5)

    for(let i = 0; i < posts.length/3; i++){
      const j = rand(0, posts.length/2)
      await UpVote
        .query()
        .insert({
          user_id: user.id,
          post_id: posts[j].id,
        })
        .then(console.log)
    }

    for(let i = 0; i < posts.length/4; i++){
      const j = rand(Math.floor(posts.length/2), posts.length)
      await DownVote
        .query()
        .insert({
          user_id: user.id,
          post_id: posts[j].id,
        })
        .then(console.log)
    }

    for(let i = 0; i < posts.length/10; i++){
      const j = rand(0, posts.length)
      await Favorite
        .query()
        .insert({
          user_id: user.id,
          post_id: posts[j].id,
        })
        .then(console.log)
    }
  }
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

doSeeds().then(() => console.log('DONE!'))

