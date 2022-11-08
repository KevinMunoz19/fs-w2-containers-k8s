const { Pool } = require('pg');
const { postgres } = require('../config/config');

const pool = new Pool({
  user: postgres.user,
  host: postgres.host,
  database: postgres.database, 
  password: postgres.password, 
  port: postgres.port
});

module.exports = pool;
