const Pool = require('pg').Pool
const pool = new Pool({
  user: 'news_api',
  host: 'localhost',
  database: 'news_api_db',
  password: 'password',
  port: 5432,
})