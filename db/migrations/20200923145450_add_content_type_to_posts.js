
exports.up = function(knex) {
  return knex.schema.table('posts', t => {
    t.string('content_type')
    t.string('category')
  })
};

exports.down = function(knex) {
  
};
