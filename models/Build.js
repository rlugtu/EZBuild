const db = require('../db/config')

const Build = {}

Build.getBuilds = () => {
    return db.query('SELECT * FROM builds')
}


module.exports = Build