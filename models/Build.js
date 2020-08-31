const db = require('../db/config')

const Build = {}

Build.getGaming = () => {
    return db.query(`SELECT parts.make, parts.model, builds.build_name
    FROM builds
    INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='gaming';`)
}
Build.getStreaming = () => {
    return db.query(`SELECT parts.make, parts.model, builds.build_name
    FROM builds
    INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='streaming';`)
}
Build.getCreators = () => {
    return db.query(`SELECT parts.make, parts.model, builds.build_name
    FROM builds
    INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='creators';`)
}

module.exports = Build