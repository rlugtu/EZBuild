const express = require('express')
const user_buildRouter = express.Router()

const userBuildController = require('../controllers/user_builds-controller')

user_buildRouter.get('/', userBuildController.index)
user_buildRouter.post('/', userBuildController.create)

user_buildRouter.get('/:id', userBuildController.getBuildById)
user_buildRouter.put('/:id', userBuildController.update)
user_buildRouter.delete('/:id', userBuildController.delete)

module.exports = user_buildRouter