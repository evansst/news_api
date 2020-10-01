
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('up_votes').del()
    .then(function () {
      // Inserts seed entries
      return knex('up_votes').insert([
        {
          user_id: 1,
          post_id: 1,
        },{
          user_id: 1,
          post_id: 2,
        },{
          user_id: 1,
          post_id: 3,
        },{
          user_id: 1,
          post_id: 4,
        },{
          user_id: 1,
          post_id: 5,
        },{
          user_id: 2,
          post_id: 1,
        },{
          user_id: 2,
          post_id: 2,
        },{
          user_id: 2,
          post_id: 3,
        },{
          user_id: 2,
          post_id: 4,
        },{
          user_id: 2,
          post_id: 5,
        },
      ]);
    });
};
