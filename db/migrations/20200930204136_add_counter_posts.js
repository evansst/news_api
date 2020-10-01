
exports.up = function(knex) {
  return knex.schema.createTable('counter_posts', t => {
    t.increments('id')
    t.string('url')
    t.string('title')
    t.integer('post_id').references('id').inTable('posts')
    t.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('counter_posts')
};
