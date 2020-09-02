const db = require('../db/config')

const Part = {}

Part.getBronzeRam = () => {
    return db.query(`SELECT * FROM parts WHERE parts.price_tier ='bronze' AND parts.part_type='ram';`)
}
Part.getSilverRam = () => {
    return db.query(`SELECT * FROM parts WHERE parts.price_tier ='silver' AND parts.part_type='ram';`)
}
Part.getGoldRam = () => {
    return db.query(`SELECT * FROM parts WHERE parts.price_tier ='gold' AND parts.part_type='ram';`)
}

Part.getBronzeCooling = () => {
    return db.query(`SELECT * FROM parts WHERE parts.price_tier = 'bronze' AND parts.part_type='cooling';`)
}
Part.getSilverCooling = () => {
    return db.query(`SELECT * FROM parts WHERE parts.price_tier = 'silver' AND parts.part_type='cooling';`)
}
Part.getGoldCooling = () => {
    return db.query(`SELECT * FROM parts WHERE parts.price_tier = 'gold' AND parts.part_type='cooling';`)
}

Part.getBronzeMotherboard = () => {
    return db.query(`SELECT * FROM parts WHERE parts.price_tier = 'bronze' AND parts.part_type='motherboard';`)
}


Part.getSilverMotherboard = () => {
    return db.query(`SELECT * FROM parts WHERE parts.price_tier = 'silver' AND parts.part_type='motherboard';`)
}

Part.getGoldMotherboard = () => {
    return db.query(`SELECT * FROM parts WHERE parts.price_tier = 'gold' AND parts.part_type='motherboard';`)
}


Part.getBronzeMobo
module.exports = Part
