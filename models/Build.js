const db = require('../db/config')

const Build = {}

Build.getGaming = () => {
    return db.query(`SELECT * FROM builds WHERE build_type ='gaming';`)
    // return db.query(`SELECT parts.make, parts.model, builds.build_name
    // FROM builds
    // INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='gaming';`)
}
Build.getGamingBronze = () => {
    return db.query(`
    SELECT parts.make, parts.model, builds.build_name
        FROM builds
        INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='gaming' AND builds.price_tier='bronze';`)
}
Build.getGamingSilver = () => {
    return db.query(`
    SELECT parts.make, parts.model, builds.build_name
        FROM builds
        INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='gaming' AND builds.price_tier='silver';`)
}
Build.getGamingGold = () => {
    return db.query(`
    SELECT parts.make, parts.model, builds.build_name
        FROM builds
        INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='gaming' AND builds.price_tier='gold';`)
}

Build.getStreaming = () => {
    return db.query(`SELECT * FROM builds WHERE build_type ='streaming';`)
    // return db.query(`SELECT parts.make, parts.model, builds.build_name
    // FROM builds
    // INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='streaming';`)
}

Build.getStreamingBronze = () => {
    return db.query(`
    SELECT parts.make, parts.model, builds.build_name
        FROM builds
        INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='streaming' AND builds.price_tier='bronze';`)
}

Build.getStreamingSilver = () => {
    return db.query(`
    SELECT parts.make, parts.model, builds.build_name
        FROM builds
        INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='streaming' AND builds.price_tier='silver';`)
}

Build.getStreamingGold = () => {
    return db.query(`
    SELECT parts.make, parts.model, builds.build_name
        FROM builds
        INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='streaming' AND builds.price_tier='gold';`)
}



Build.getCreators = () => {
    return db.query(`SELECT * FROM builds WHERE build_type ='creators';`)
    // return db.query(`SELECT parts.make, parts.model, builds.build_name
    // FROM builds
    // INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='creators';`)
}
Build.getCreatorsBronze = () => {
    return db.query(`
    SELECT parts.make, parts.model, builds.build_name
        FROM builds
        INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='creators' AND builds.price_tier='bronze';`)
}

Build.getCreatorsSilver = () => {
    return db.query(`
    SELECT parts.make, parts.model, builds.build_name
        FROM builds
        INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='creators' AND builds.price_tier='silver';`)
}

Build.getCreatorsGold = () => {
    return db.query(`
    SELECT parts.make, parts.model, builds.build_name
        FROM builds
        INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='creators' AND builds.price_tier='gold';`)
}



module.exports = Build

