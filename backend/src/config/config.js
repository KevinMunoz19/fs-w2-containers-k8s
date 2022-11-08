const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  postgres: {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    port: process.env.POSTGRES_PORT
  },
  server: {
    port: process.env.SERVER_PORT || 3800
  }
}
