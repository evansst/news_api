const { Model } = require('objection')
const knex = require('../db/knex')

Model.knex(knex)

class UpVote extends Model {
  static get tableName() {
    return 'up_votes'
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
          to: 'up_votes.user_id'
        }
      },
      post: {
        relation: Model.HasOneRelation,
        modelClass: Post,
        join: {
          from: 'posts.id',
          to: 'up_votes.post_id'
        }
      }
    }
  }
}

module.exports = UpVote