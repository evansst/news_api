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

    return {
      up_votes: {
        relation: Model.HasManyRelation,
        modelClass: UpVote,
        join: {
          from: 'posts.id',
          to: 'up_votes.post_id'
        }
      },
    }
  }
}

module.exports = Post;