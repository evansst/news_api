const { Model } = require('objection')
const knex = require('../db/knex')

Model.knex(knex)

class Favorite extends Model {
  static get tableName() {
    return 'favorites'
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
          to: 'favorites.user_id'
        }
      },
      post: {
        relation: Model.HasOneRelation,
        modelClass: Post,
        join: {
          from: 'posts.id',
          to: 'favorites.post_id'
        }
      }
    }
  }
}

module.exports = Favorite