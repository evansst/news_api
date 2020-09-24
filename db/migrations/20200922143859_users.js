
exports.up = function(knex) {
  return knex.schema.createTable('users', t => {
    t.increments('id')
    t.string('username')
    t.string('email')
    t.string('password_digest')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
