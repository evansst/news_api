const Post = require('./models/Post')
const fetch = require("node-fetch");

function scrub() {  
  Post
    .query()
    .then(posts => {
      for(const [i, post] of posts.entries()) {
        fetch(post.url)
          .catch(error => {
            console.log(`Post: ${post.id} responded with an error!`)
            Post.query().deleteById(post.id).then(console.log)
          })
          .then(response => {
            if(response.status !== 200) console.log( `Post: ${post.id} responds with status: ${response.status}`)
          })
          .catch(error => {
            console.log(`Post: ${post.id} sounds out some other error!`)
            Post.query().deleteById(post.id).then(console.log)
          })

        console.log('On index ' + i + ' of ' + (posts.length - 1))
      }
    })
}

scrub()

