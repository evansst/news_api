const { Model } = require('objection')
const knex = require('../db/knex')

Model.knex(knex)

class DownVote extends Model {
  static get tableName() {
    return 'down_votes'
  }

  static get relationMappings() {
    const User = require('./User')
    const Post = require('./Post')

    return {
      user: {
        relation: Model.HasOneRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          to: 'down_votes.user_id'
        }
      },
      post: {
        relation: Model.HasOneRelation,
        modelClass: Post,
        join: {
          from: 'posts.id',
          to: 'down_votes.post_id'
        }
      }
    }
  }
}

module.exports = DownVote