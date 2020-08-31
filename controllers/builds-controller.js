const Build = require('../models/Build')
const buildController = {}

buildController.getGaming = (req, res, next) => {
    Build.getGaming()
        .then((build) => {
            res.json({
                message: 'ok',
                data: { build }
            })
        })
        .catch(next)
}

buildController.getStreaming = (req, res, next) => {
    Build.getStreaming()
        .then((build) => {
            res.json({
                message: 'ok',
                data: { build }
            })
        })
        .catch(next)
}

buildController.getCreators = (req, res, next) => {
    Build.getCreators()
        .then((build) => {
            res.json({
                message: 'ok',
                data: { build }
            })
        })
        .catch(next)
}


module.exports = buildController