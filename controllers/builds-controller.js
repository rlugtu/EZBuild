const Build = require('../models/Build')
const buildController = {}

buildController.getGaming = (req, res, next) => {
    Build.getGaming()
        .then((build) => {
            res.json({
                message: 'ok',
                build
            })
        })
        .catch(next)
}
buildController.getGamingBronzeParts = (req, res, next) => {
    Build.getGamingBronze()
        .then((parts) => {
            res.json({
                parts
            })
        })
        .catch(next)
}
buildController.getGamingSilverParts = (req, res, next) => {
    Build.getGamingSilver()
        .then((parts) => {
            res.json({
                parts
            })
        })
        .catch(next)
}
buildController.getGamingGoldParts = (req, res, next) => {
    Build.getGamingGold()
        .then((parts) => {
            res.json({
                parts
            })
        })
        .catch(next)
}


buildController.getStreaming = (req, res, next) => {
    Build.getStreaming()
        .then((build) => {
            res.json({
                message: 'ok',
                build
            })
        })
        .catch(next)
}

buildController.getStreamingBronzeParts = (req, res, next) => {
    Build.getStreamingBronze()
        .then((parts) => {
            res.json({
                parts
            })
        })
        .catch(next)
}

buildController.getStreamingSilverParts = (req, res, next) => {
    Build.getStreamingSilver()
        .then((parts) => {
            res.json({
                parts
            })
        })
        .catch(next)
}
buildController.getStreamingGoldParts = (req, res, next) => {
    Build.getStreamingGold()
        .then((parts) => {
            res.json({
                parts
            })
        })
        .catch(next)
}

buildController.getCreators = (req, res, next) => {
    Build.getCreators()
        .then((build) => {
            res.json({
                message: 'ok',
                build
            })
        })
        .catch(next)
}

buildController.getCreatorsBronze = (req, res, next) => {
    Build.getCreatorsBronze()
        .then((build) => {
            res.json({
                message: 'ok',
                build
            })
        })
        .catch(next)
}

buildController.getCreatorsSilver = (req, res, next) => {
    Build.getCreatorsSilver()
        .then((build) => {
            res.json({
                message: 'ok',
                build
            })
        })
        .catch(next)
}

buildController.getCreatorsGold = (req, res, next) => {
    Build.getCreatorsGold()
        .then((build) => {
            res.json({
                message: 'ok',
                build
            })
        })
        .catch(next)
}


module.exports = buildController