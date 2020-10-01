
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('counter_posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('counter_posts').insert([
        {
          post_id: 1,
          url: 'https://www.cbssports.com/fantasy/football/news/fantasy-football-week-2-review-winners-and-losers-and-what-you-missed-from-every-game-on-the-schedule/',
          title: 'Fantasy Football Week 2 Review: Winners and losers from an injury-packed NFL week',
        },{
          post_id: 3,
          url: 'https://www.si.com/nfl/falcons/news/atlanta-falcons-dallas-cowboys-turnovers-dak-prescott-matt-ryan-julio-jones-ridley-hurst-blowout-win-loss-recap-video-highlights',
          title: 'Falcons Blow 19-point Second-half Lead',
        }
      ]);
    });
};
