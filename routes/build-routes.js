const express = require('express')
const buildRoutes = express.Router()

const buildController = require('../controllers/builds-controller'
)

buildRoutes.get('/gaming', buildController.getGaming)
buildRoutes.get('/gaming/bronze', buildController.getBronzeParts)
buildRoutes.get('/gaming/silver', buildController.getSilverParts)
buildRoutes.get('/gaming/gold', buildController.getGoldParts)


buildRoutes.get('/streaming', buildController.getStreaming)
buildRoutes.get('/creators', buildController.getCreators)



module.exports = buildRoutes