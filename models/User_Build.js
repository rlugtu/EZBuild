const db = require('../db/config')

class UserBuild {
    constructor({ id, make, model, part_type, price, user_id }) {
        this.id = id || null;
        this.make = make;
        this.model = model;
        this.part_type = part_type;
        this.price = price;
        this.user_id = user_id;
    }
    static getAllBuilds = () => {
        return db
            .manyOrNone(`SELECT * FROM user_builds`)
            .then((builds) => builds.map((build) => new this(build)))
    }
    static getBuildById = (id) => {
        return db.oneOrNone(`
        SELECT * FROM user_builds WHERE id = $1`, [id])
            .then((build) => {
                if (build) return new this(build);
                throw new Error(`Build ${id} not found`)
            });
    }

    save() {
        return db
            .one(`INSERT INTO user_builds
            (make, model, part_type, price, user_id)
        VALUES
        ($/make/, $/model/, $/part_type/, $/price/, $/user_id/)
        RETURNING *`, this).then(part => Object.assign(this, part))
    }

    update(changes) {
        Object.assign(this, changes)
        return db
            .one(`UPDATE user_builds SET 
        make = $/make/,
        model = $/model/,
        part_type = $/part_type/,
        price = $/price/
        WHERE id = $/id/
        RETURNING *
        `,
                this)
            .then((updatedBuild) => Object.assign(this, updatedBuild))
    }

    delete() {
        return db.none(`DELETE FROM user_builds WHERE id = $1`, this.id)
    }
}

// Displays a build by ID once the user has saved it to the user_builds table


// Takes information from the builds table and translates it to the user_bulids table. Still need to assign a foreign key here.
// User_Build.saveBuild = () => {
//     return db.query(
//         `INSERT INTO user_builds
//         (price_tier, ram_id, ssd_id, gpu_id, cpu_id)
//         VALUE ($/price_tier/, $/ram_id/, $/ssd_id/, $/gpu_id/, $/cpu_id/)
//         RETURNING *`
//     )
// }

// // Won't need yet, but may as well have it. We can use this for an admin page or alter it a little to let users see multiple builds.
// User_Build.getAll = () => {
//     return db.query(`
//     SELECT * FROM user_builds ORDER by id ASC
//     `)
// }

// User_Build.delete = () => {
//     return db.query(`
//     'DELETE FROM user_builds WHERE id = $1`, this.id)
// }

module.exports = UserBuild