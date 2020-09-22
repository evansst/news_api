
exports.up = function(knex) {
  return knex.schema.createTable('posts', t => {
    t.increments('id')
    t.string('url')
    t.string('title')
    t.integer('user_id').references('id').inTable('users')
    t.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts')
};
