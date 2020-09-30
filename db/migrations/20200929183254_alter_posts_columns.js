
exports.up = function(knex) {
  return knex.schema.alterTable('posts', (t) => {
    t.unique('url')
  })
};

exports.down = function(knex) {
  
};
