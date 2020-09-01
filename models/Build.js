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
    SELECT builds.build_name, parts.model, parts.make, parts.price, parts.image_url, parts.part_description FROM builds INNER JOIN parts on builds.gpu_id=parts.gpu_id AND builds.price_tier='bronze' AND builds.build_type='gaming';`)

}
Build.getGamingSilver = () => {
    return db.query(`
    SELECT builds.build_name, parts.model, parts.make, parts.price, parts.image_url, parts.part_description FROM builds INNER JOIN parts on builds.gpu_id=parts.gpu_id AND builds.price_tier='silver' AND builds.build_type='gaming';`)
}
Build.getGamingGold = () => {
    return db.query(`
    SELECT builds.build_name, parts.model, parts.make, parts.price, parts.image_url, parts.part_description FROM builds INNER JOIN parts on builds.gpu_id=parts.gpu_id AND builds.price_tier='gold' AND builds.build_type='gaming';`)
}

Build.getStreaming = () => {
    return db.query(`SELECT * FROM builds WHERE build_type ='streaming';`)
    // return db.query(`SELECT parts.make, parts.model, builds.build_name
    // FROM builds
    // INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='streaming';`)
}

Build.getStreamingBronze = () => {
    return db.query(`
    SELECT builds.build_name, parts.model, parts.make FROM builds INNER JOIN parts on builds.gpu_id=parts.gpu_id AND builds.price_tier='bronze' AND builds.build_type='streaming';`)
}

Build.getStreamingSilver = () => {
    return db.query(`
    SELECT builds.build_name, parts.model, parts.make FROM builds INNER JOIN parts on builds.gpu_id=parts.gpu_id AND builds.price_tier='silver' AND builds.build_type='streaming';`)
}

Build.getStreamingGold = () => {
    return db.query(`
    SELECT builds.build_name, parts.model, parts.make FROM builds INNER JOIN parts on builds.gpu_id=parts.gpu_id AND builds.price_tier='gold' AND builds.build_type='streaming';`)
}



Build.getCreators = () => {
    return db.query(`SELECT * FROM builds WHERE build_type ='creators';`)
    // return db.query(`SELECT parts.make, parts.model, builds.build_name
    // FROM builds
    // INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='creators';`)
}
Build.getCreatorsBronze = () => {
    return db.query(`
    SELECT builds.build_name, parts.model, parts.make FROM builds INNER JOIN parts on builds.gpu_id=parts.gpu_id AND builds.price_tier='bronze' AND builds.build_type='creators';`)
}

Build.getCreatorsSilver = () => {
    return db.query(`
    SELECT builds.build_name, parts.model, parts.make FROM builds INNER JOIN parts on builds.gpu_id=parts.gpu_id AND builds.price_tier='silver' AND builds.build_type='creators';`)
}

Build.getCreatorsGold = () => {
    return db.query(`
    SELECT builds.build_name, parts.model, parts.make FROM builds INNER JOIN parts on builds.gpu_id=parts.gpu_id AND builds.price_tier='gold' AND builds.build_type='creators';`)
}



module.exports = Build

