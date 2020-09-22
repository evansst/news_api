module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/news_api_db',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },

};
