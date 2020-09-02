const UserBuild = require('../models/User_Build')
const userBuildController = {}

userBuildController.getBuild = (req, res, next) => {
    UserBuild.getById()
    .then((user_build) => {
        res.json({
            message: 'Looking at build!',
            user_build
        })
    })
    .catch(next)
}

userBuildController.getAllBuilds = (req, res, next) => {
    UserBuild.getAll()
    .then((user_build) => {
        res.json({
            message: 'Looking at build!',
            user_build
        })
    })
    .catch(next)
}