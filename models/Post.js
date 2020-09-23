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
    }
  }
}

module.exports = Post;