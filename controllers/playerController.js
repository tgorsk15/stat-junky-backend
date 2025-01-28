const { BalldontlieAPI } = require("@balldontlie/sdk")
const api = new BalldontlieAPI({ apiKey: process.env.API_KEY })

const apiUrl = process.env.API_URL

exports.getPlayersBySearch = async (req, res) => {
    const playerName = req.params.query
    console.log('search query:', playerName)

    try {
        const options = {
            method: "GET",
            headers: {"Content-Type": "application/json", "Authorization": process.env.API_KEY}
        }

        const response = await fetch(`${apiUrl}/players?search=${playerName}&per_page=100`, options)
        const players = await response.json()

        console.log('here is players with that name:', players)
        res.json({
            players: players
        })
    } catch {
        console.error('Error fetching player:', error)
        res.status(500).json({ error: 'Failed to fetch player data' })
    }
    
}

// build API builder for below function

exports.getPlayerSeasons = async (req, res) => {
    const playerId = req.params.id

    try {
        const options = {
            method: "GET",
            headers: {"Content-Type": "application/json", "Authorization": process.env.API_KEY}
        }

        const response = await fetch(`${apiUrl}/stats?player_ids=${15}`)
        const seasons = await response.json()

        res.json({
            seasons: seasons
        })

    } catch {
        console.error('Error getting player stats:', error)
        res.status(500).json({ error: 'Failed to fetch player stats' })
    }
}