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
buildController.getBronzeParts = (req, res, next) => {
    Build.getGamingBronze()
        .then((parts) => {
            res.json({
                parts
            })
        })
        .catch(next)
}
buildController.getSilverParts = (req, res, next) => {
    Build.getGamingSilver()
        .then((parts) => {
            res.json({
                parts
            })
        })
        .catch(next)
}
buildController.getGoldParts = (req, res, next) => {
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


module.exports = buildController