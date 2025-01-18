const { Router } = require('express')
const playerRouter = Router()
const playerController = require('../controllers/playerController')

playerRouter.get('/player/:playerName', playerController.getPlayer)

module.exports = playerRouter