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
        relation: Model.ManyToManyRelation,
        modelClass: Post,
        join: {
          from: 'users.id',
          through: {
            from: 'favorites.user_id',
            to: 'favorites.post_id'
          },
          to: 'posts.id'
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