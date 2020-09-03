const express = require('express')
const user_buildRouter = express.Router()
const authHelpers = require('../services/auth/authHelpers')

const userBuildController = require('../controllers/user_builds-controller')

user_buildRouter.get('/', userBuildController.index)
user_buildRouter.post('/', userBuildController.create)

user_buildRouter.get('/:id', userBuildController.getUserBuildById)
user_buildRouter.put('/:id', userBuildController.update)
user_buildRouter.delete('/:id', userBuildController.delete)

module.exports = user_buildRouter