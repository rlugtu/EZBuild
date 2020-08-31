const express = require('express')
const buildRoutes = express.Router()

const buildController = require('../controllers/builds-controller'
)

buildRoutes.get('/gaming', buildController.getGaming)
buildRoutes.get('/streaming', buildController.getStreaming)
buildRoutes.get('/creators', buildController.getCreators)



module.exports = buildRoutes