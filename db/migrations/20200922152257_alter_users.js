
exports.up = function(knex) {
  return knex.schema.alterTable('users', (t) => {
    t.unique('email')
    t.unique('username')
  })
};

exports.down = function(knex) {
  
};
