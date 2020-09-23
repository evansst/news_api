
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'evansst',
          email: 'sevansam@gmail.com',
          password: 'samevans'
        },{
          username: 'torihall6',
          email: 'tori@gmail.com',
          password: 'torihiall'
        },
      ]);
    });
};
