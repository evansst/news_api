const { Model } = require('objection');
const { post } = require('../controllers/posts_controller');
const knex = require('../db/knex');

Model.knex(knex)
class User extends Model {
  static get tableName() {
    return 'users';
  }
  
  static get relationMappings() {
    const Post = require('./Post')
    const Favorite = require('./Favorite')
    const UpVote = require('./UpVote')
    const DownVote = require('./DownVote')

    return {
      posts: {
        relation: Model.HasManyRelation,
        modelClass: Post,
        join: {
          from: 'users.id',
          to: 'posts.user_id'
        }
      },
      favorites: {
        relation: Model.HasManyRelation,
        modelClass: Favorite,
        join: {
          from: 'users.id',
          to: 'favorites.user_id'
        }
      }, 
      up_votes: {
        relation: Model.HasManyRelation,
        modelClass: UpVote,
        join: {
          from: 'users.id',
          to: 'up_votes.user_id'
        }
      },
      down_votes: {
        relation: Model.HasManyRelation,
        modelClass: DownVote,
        join: {
          from: 'users.id',
          to: 'down_votes.user_id'
        }
      }
    }
  }
}

module.exports = User