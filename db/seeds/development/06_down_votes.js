
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('down_votes').del()
    .then(function () {
      // Inserts seed entries
      return knex('down_votes').insert([

      ]);
    });
};
