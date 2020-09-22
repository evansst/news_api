const { Model } = require('objection');
const knex = require('../db/knex');

Model.knex(knex)

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    const Post = require('./Post')
    return {
      posts: {
        relation: Model.HasManyRelation,
        modelClass: Post,
        join: {
          from: 'users.id',
          to: 'posts.user_id'
        }
      }
    }
  }
}

module.exports = User;