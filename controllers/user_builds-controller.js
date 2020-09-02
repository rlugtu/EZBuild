const UserBuild = require('../models/User_Build')
const userBuildController = {}

userBuildController.index = (req, res, next) => {
    UserBuild.getAllBuilds()
        .then((build) => {
            res.json({
                message: 'ok',
                build
            })
        }).catch(next)
}

userBuildController.getBuildById = (req, res, next) => {
    UserBuild.getBuildById(req.params.id)
        .then((user_build) => {
            res.json({
                message: 'Looking at build!',
                user_build
            })
        })
        .catch(next)
}

userBuildController.create = (req, res, next) => {
    new UserBuild({
        make: req.body.make,
        model: req.body.model,
        part_type: req.body.part_type,
        price: req.body.price,
        user_id: req.body.user_id
    })
        .save()
        .then((parts) => {
            res.json({
                message: 'Build Created',
                parts
            })
        })
        .catch(next)
}

userBuildController.update = (req, res, next) => {
    UserBuild.getBuildById(req.params.id)
        .then((user_build) => {
            user_build.update({
                make: req.body.make,
                model: req.body.model,
                part_type: req.body.part_type,
                price: req.body.price,
            })
        })
        .then((user_build) => {
            res.json({
                message: 'Build Updated',
                user_build: user_build
            })
        })
        .catch(next)
}

userBuildController.delete = (req, res, next) => {
    UserBuild.getBuildById(req.params.id)
        .then((build) => build.delete())
        .then(() => {
            res.json({
                message: 'Build Deleted'
            })
        })
        .catch(next)
}
module.exports = userBuildController