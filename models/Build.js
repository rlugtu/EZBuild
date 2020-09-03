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
    SELECT * FROM parts
    INNER JOIN builds ON (builds.cpu_id=parts.cpu_id OR builds.gpu_id=parts.gpu_id)
    AND builds.build_name='gato';`)

}
Build.getGamingSilver = () => {
    return db.query(`
    SELECT * FROM parts
    INNER JOIN builds ON (builds.cpu_id=parts.cpu_id OR builds.gpu_id=parts.gpu_id)
    AND builds.build_name='tigre';`)
}
Build.getGamingGold = () => {
    return db.query(`
    SELECT * FROM parts
    INNER JOIN builds ON (builds.cpu_id=parts.cpu_id OR builds.gpu_id=parts.gpu_id)
    AND builds.build_name='jaguar';`)
}

Build.getStreaming = () => {
    return db.query(`SELECT * FROM builds WHERE build_type ='streaming';`)
    // return db.query(`SELECT parts.make, parts.model, builds.build_name
    // FROM builds
    // INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='streaming';`)
}

Build.getStreamingBronze = () => {
    return db.query(`
    SELECT * FROM parts
    INNER JOIN builds ON (builds.cpu_id=parts.cpu_id OR builds.gpu_id=parts.gpu_id)
    AND builds.build_name='pinguino';`)
}

Build.getStreamingSilver = () => {
    return db.query(`
    SELECT * FROM parts
    INNER JOIN builds ON (builds.cpu_id=parts.cpu_id OR builds.gpu_id=parts.gpu_id)
    AND builds.build_name='delfin';`)
}

Build.getStreamingGold = () => {
    return db.query(`
    SELECT * FROM parts
    INNER JOIN builds ON (builds.cpu_id=parts.cpu_id OR builds.gpu_id=parts.gpu_id)
    AND builds.build_name='tiburon';`)
}



Build.getCreators = () => {
    return db.query(`SELECT * FROM builds WHERE build_type ='creators';`)
    // return db.query(`SELECT parts.make, parts.model, builds.build_name
    // FROM builds
    // INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='creators';`)
}
Build.getCreatorsBronze = () => {
    return db.query(`
    SELECT * FROM parts
    INNER JOIN builds ON (builds.cpu_id=parts.cpu_id OR builds.gpu_id=parts.gpu_id)
    AND builds.build_name='cierva';`)
}

Build.getCreatorsSilver = () => {
    return db.query(`
    SELECT * FROM parts
    INNER JOIN builds ON (builds.cpu_id=parts.cpu_id OR builds.gpu_id=parts.gpu_id)
    AND builds.build_name='jirafa';`)
}

Build.getCreatorsGold = () => {
    return db.query(`
    SELECT * FROM parts
    INNER JOIN builds ON (builds.cpu_id=parts.cpu_id OR builds.gpu_id=parts.gpu_id)
    AND builds.build_name='elefante';`)
}



module.exports = Build

