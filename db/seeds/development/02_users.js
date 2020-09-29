const bcrypt = require('bcrypt')

const samsPassword = bcrypt.hashSync('samevans', 12)
const torisPassword = bcrypt.hashSync('torihall', 12)

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'evansst',
          email: 'sevansam@gmail.com',
          password_digest: samsPassword,
        },{
          username: 'torihall6',
          email: 'tori@gmail.com',
          password_digest: torisPassword,
        },
      ]);
    });
};
