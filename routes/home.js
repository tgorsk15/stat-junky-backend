const { Router } = require('express')
const homeRouter = Router()
const homeController = require('../controllers/homeController.js')

homeRouter.get('/', homeController.homeTest)

module.exports = homeRouter