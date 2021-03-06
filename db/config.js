const DB_NAME = 'ezbuild';
require('dotenv').config();

const options = {
  query: (e) => {
    console.log(e.query);
  },
};

const pgp = require('pg-promise')(options);

function setDatabase() {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    return pgp({
      database: DB_NAME,
      port: 5432,
      host: 'localhost',
      // user: 'postgres',
      // password: 'my_postgres_password'
    })
  } else if (process.env.NODE_ENV === 'production') {
    return pgp(process.env.DATABASE_URL);
  }
}

const db = setDatabase();

module.exports = db;