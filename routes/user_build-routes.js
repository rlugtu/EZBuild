const express = require('express')
const buildUserRoutes = express.Router()

const userRoutesController = require('../controllers/user_builds-controller')

buildUserRoutes.get('/userpage', userRoutesController.getAllBuilds)