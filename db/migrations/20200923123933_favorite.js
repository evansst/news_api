
exports.up = function(knex) {
  return knex.schema.createTable('favorites', t => {
    t.increments('id')
    t.integer('user_id').references('id').inTable('users')
    t.integer('post_id').references('id').inTable('posts')
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable('favorites')
};
