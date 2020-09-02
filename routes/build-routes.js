const express = require('express')
const buildRoutes = express.Router()

const buildController = require('../controllers/builds-controller'
)

// Clean this up with double parameters possibly
buildRoutes.get('/gaming', buildController.getGaming)
buildRoutes.get('/gaming/bronze', buildController.getGamingBronzeParts)
buildRoutes.get('/gaming/silver', buildController.getGamingSilverParts)
buildRoutes.get('/gaming/gold', buildController.getGamingGoldParts)

buildRoutes.get('/streaming/bronze', buildController.getStreamingBronzeParts)
buildRoutes.get('/streaming/silver', buildController.getStreamingSilverParts)
buildRoutes.get('/streaming/gold', buildController.getStreamingGoldParts)
buildRoutes.get('/streaming', buildController.getStreaming)

buildRoutes.get('/creators', buildController.getCreators)
buildRoutes.get('/creators/bronze', buildController.getCreatorsBronze)
buildRoutes.get('/creators/silver', buildController.getCreatorsSilver)
buildRoutes.get('/creators/gold', buildController.getCreatorsGold)



module.exports = buildRoutes