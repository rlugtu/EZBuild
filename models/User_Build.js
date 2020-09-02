const db = require('../db/config')
const User_Build = {}

// Displays a build by ID once the user has saved it to the user_builds table
User_Build.getById = () => {
    return db.query(`
    SELECT * FROM parts
    INNER JOIN builds ON (user_builds.ram_id=parts.ram_id OR user_builds.cpu_id=parts.cpu_id OR user_builds.gpu_id=parts.gpu_id OR user_builds.ssd_id=parts.ssd_id)
    AND user_builds.id = $1`, [id])
}

// Takes information from the builds table and translates it to the user_bulids table. Still need to assign a foreign key here.
User_Build.saveBuild = () => {
    return db.query(
        `INSERT INTO user_builds
        (price_tier, ram_id, ssd_id, gpu_id, cpu_id)
        VALUE ($/price_tier/, $/ram_id/, $/ssd_id/, $/gpu_id/, $/cpu_id/)
        RETURNING *`
    )
}

// Won't need yet, but may as well have it. We can use this for an admin page or alter it a little to let users see multiple builds.
User_Build.getAll = () => {
    return db.query(`
    SELECT * FROM user_builds ORDER by id ASC
    `)
}

User_Build.delete = () => {
    return db.query(`
    'DELETE FROM user_builds WHERE id = $1`, this.id)
}

module.exports = User_Build