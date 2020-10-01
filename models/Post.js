const { Model } = require('objection')
const knex = require('../db/knex')


Model.knex(knex)
class Post extends Model {
  static get tableName() {
    return 'posts'
  }

  static get relationMappings() {
    const User = require('./User')
    const UpVote = require('./UpVote')
    const DownVote = require('./DownVote')
    const Favorite = require('./Favorite')
    const CounterPost = require('./CounterPost')

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          to: 'posts.user_id'
        }
      },
      up_votes: {
        relation: Model.HasManyRelation,
        modelClass: UpVote,
        join: {
          from: 'posts.id',
          to: 'up_votes.post_id'
        }
      },
      down_votes: {
        relation: Model.HasManyRelation,
        modelClass: DownVote,
        join: {
          from: 'posts.id',
          to: 'down_votes.post_id'
        }
      },
      favorites: {
        relation: Model.HasManyRelation,
        modelClass: Favorite,
        join: {
          from: 'posts.id',
          to: 'favorites.post_id'
        }
      },
      counter_post: {
        relation: Model.HasOneRelation,
        modelClass: CounterPost,
        join: {
          from: 'posts.id',
          to: 'counter_posts.post_id'
        }
      }
    }
  }
}

module.exports = Post;