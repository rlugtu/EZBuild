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
<<<<<<< HEAD
       user: 'postgres',
       password: 'asdfdsa'
=======
      user: 'postgres',
      password: 'my_postgres_password'
>>>>>>> e06299161b2234c84ddb29910c15059076c725ed
    })
  } else if (process.env.NODE_ENV === 'production') {
    return pgp(process.env.DATABASE_URL);
  }
}

const db = setDatabase();

module.exports = db;