const express = require('express')
const buildRoutes = express.Router()

const buildController = require('../controllers/builds-controller'
)

buildRoutes.get('/', buildController.index)

module.exports = buildRoutes