const Build = require('../models/Build')
const buildController = {}

buildController.index = (req, res, next) => {
    Build.getBuilds()
        .then((build) => {
            res.json({
                message: 'ok',
                data: { build }
            })
        })
        .catch(next)
}

buildController.create = (req, res, next) => {
    new Build({
        price_tier: req.body.price_tier,
        build_type: req.body.build_type,
        build_name: req.build_name,
        build_description: req.build_description
    })
        .save()
        .then((build) => {
            res.json({
                message: 'Build added successfully',
                data: { build }
            })
        })
        .catch(next)
}

module.exports = buildController