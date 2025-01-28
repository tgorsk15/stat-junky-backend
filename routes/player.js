const { Router } = require('express')
const playerRouter = Router()
const playerController = require('../controllers/playerController')

playerRouter.get('/search/:query', playerController.getPlayersBySearch)

playerRouter.get('/seasons/:playerId', playerController.getPlayerSeasons)

module.exports = playerRouter