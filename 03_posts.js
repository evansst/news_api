
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(() => {
      // Inserts seed entries
      return knex('posts').insert([
        {
          user_id: 1,
          url: 'https://www.espn.com/fantasy/football/story/_/id/29931541/fantasy-football-highs-lows-nfl-week-2-saquon-barkley-many-notables-go-down',
          title: 'Fantasy football highs and lows from NFL Week 2',
          description: 'Saquon Barkley among many notables to go down',
          date_published: '2020-09-20T',
          content_type: 'Article',
          category: 'Sports',
        },{
          user_id: 1,
          url: 'https://www.pff.com/news/fantasy-football-reactions-to-nfl-week-2',
          title: 'Jahnke: Fantasy football reactions to NFL Week 2',
          description: '',
          date_published: '2020-09-20T',
          content_type: 'Article',
          category: 'Sports',
        },{
          user_id: 1,
          url: 'https://sports.yahoo.com/cowboys-did-something-no-team-has-done-in-87-years-it-occurred-in-a-win-that-rarely-materialized-under-jason-garrett-023704750.html',
          title: 'Cowboys did something no team has done in 87 years.',
          description: 'It occurred in a win that rarely materialized under Jason Garrett.',
          date_published: '2020-09-20T',
          content_type: 'Article',
          category: 'Sports',
        },{
          user_id: 2,
          url: 'https://www.nytimes.com/2020/09/21/sports/football/las-vegas-raiders-stadium.html',
          title: 'The N.F.L., After Shunning Las Vegas, Doubles Down With Raiders',
          description: '',
          date_published: '2020-09-20T',
          content_type: 'Article',
          category: 'Sports',
        },{
          user_id: 2,
          url: 'https://www.wsj.com/articles/nfls-first-week-draws-fewer-viewers-amid-sports-bonanza-11600212261?mod=searchresults&page=1&pos=3',
          title: 'NFL’s First Week Draws Fewer Viewers Amid Sports Bonanza',
          description: '',
          date_published: '2020-09-20T',
          content_type: 'Article',
          category: 'Sports',
        }
      ]);
    });
};
