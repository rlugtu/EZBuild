const express = require('express')
const partRoutes = express.Router()

const partController = require('../controllers/parts-controller'
)

// Clean this up with double parameters possibly
partRoutes.get('/ram/bronze', partController.getBronzeRam)
partRoutes.get('/ram/silver', partController.getSilverRam)
partRoutes.get('/ram/gold', partController.getGoldRam)

partRoutes.get('/cooling/bronze', partController.getBronzeCooling)
partRoutes.get('/cooling/silver', partController.getSilverCooling)
partRoutes.get('/cooling/gold', partController.getGoldCooling)

partRoutes.get('/motherboard/bronze', partController.getBronzeMotherboard)
partRoutes.get('/motherboard/silver', partController.getSilverMotherboard)
partRoutes.get('/motherboard/gold', partController.getGoldMotherboard)

partRoutes.get('/psu/bronze', partController.getBronzePSU)
partRoutes.get('/psu/silver', partController.getSilverPSU)
partRoutes.get('/psu/gold', partController.getGoldPSU)

partRoutes.get('/storage', partController.getAllStorage)

module.exports = partRoutes