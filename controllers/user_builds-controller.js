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

userBuildController.getUserBuildById = (req, res, next) => {
    UserBuild.getAllBuildsForUser(req.params.id)
        .then((user_build) => {
            res.json({
                message: 'Looking at build!',
                user_build
            })
        })
        .catch(next)
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
        cpu: req.body.cpu,
        gpu: req.body.gpu,
        ram: req.body.ram,
        motherboard: req.body.motherboard,
        cooling: req.body.cooling,
        storage: req.body.storage,
        psu: req.body.psu,
        desktop_case: req.body.desktop_case,
        user_id: req.user.id
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
                cpu: req.body.cpu,
                gpu: req.body.gpu,
                ram: req.body.ram,
                motherboard: req.body.motherboard,
                cooling: req.body.cooling,
                storage: req.body.storage,
                psu: req.body.psu,
                desktop_case: req.body.desktop_case,
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