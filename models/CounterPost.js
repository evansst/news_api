const { Model } = require('objection')
const knex = require('../db/knex')

Model.knex(knex)

class CounterPost extends Model {
  static get tableName() {
    return 'counter_posts'
  }

  static get relationMappings() {
    const Post = require('./Post')

    return {
      post: {
        relation: Model.BelongsToOneRelation,
        modelClass: Post,
        join: {
          from: 'posts.id',
          to: 'counter_posts.post_id'
        }
      }
    }
  }
}

module.exports = CounterPost;