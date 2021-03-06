const Part = require('../models/Part')

const partController = {}

partController.getBronzeRam = (req, res, next) => {
    Part.getBronzeRam()
        .then((part) => {
            res.json({
                message: 'ok',
                part
            })
        })
}

partController.getSilverRam = (req, res, next) => {
    Part.getSilverRam()
        .then((part) => {
            res.json({
                message: 'ok',
                part
            })
        })
}

partController.getGoldRam = (req, res, next) => {
    Part.getGoldRam()
        .then((part) => {
            res.json({
                message: 'ok',
                part
            })
        })
}

partController.getBronzeCooling = (req, res, next) => {
    Part.getBronzeCooling()
        .then((part) => {
            res.json({
                message: 'ok',
                part
            })
        })
}
partController.getSilverCooling = (req, res, next) => {
    Part.getSilverCooling()
        .then((part) => {
            res.json({
                message: 'ok',
                part
            })
        })
}
partController.getGoldCooling = (req, res, next) => {
    Part.getGoldCooling()
        .then((part) => {
            res.json({
                message: 'ok',
                part
            })
        })
}
partController.getBronzeMotherboard = (req, res, next) => {
    Part.getBronzeMotherboard()
        .then((part) => {
            res.json({
                message: 'ok',
                part
            })
        })
}

partController.getSilverMotherboard = (req, res, next) => {
    Part.getSilverMotherboard()
        .then((part) => {
            res.json({
                message: 'ok',
                part
            })
        })
}
partController.getGoldMotherboard = (req, res, next) => {
    Part.getGoldMotherboard()
        .then((part) => {
            res.json({
                message: 'ok',
                part
            })
        })
}

partController.getBronzePSU = (req, res, next) => {
    Part.getBronzePSU()
        .then((part) => {
            res.json({
                message: 'ok',
                part
            })
        })
}

partController.getSilverPSU = (req, res, next) => {
    Part.getSilverPSU()
        .then((part) => {
            res.json({
                message: 'ok',
                part
            })
        })
}
partController.getGoldPSU = (req, res, next) => {
    Part.getGoldPSU()
        .then((part) => {
            res.json({
                message: 'ok',
                part
            })
        })
}

partController.getAllStorage = (req, res, next) => {
    Part.getAllStorage()
        .then((part) => {
            res.json({
                message: 'ok',
                part
            })
        })
}
partController.getPrice = (req, res, next) => {
    Part.getPrice()
        .then((part) => {
            res.json({
                message: 'ok',
                part
            })
        })
}

module.exports = partController