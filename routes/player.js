const { Router } = require('express')
const playerRouter = Router()
const playerController = require('../controllers/playerController')

playerRouter.get('/search', playerController.getPlayerBySearch)

module.exports = playerRouter