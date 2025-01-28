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
    } catch(error) {
        console.error('Error fetching player:', error)
        res.status(500).json({ error: 'Failed to fetch player data' })
    }
    
}

// build API builder for below function
// exports.getAllSeasons = async () => {
//     seasons = []
//     firstYear = 
// }

exports.getPlayerSeasons = async (req, res) => {
    const playerData = req.body
    console.log(playerData)
    try {
        const options = {
            method: "GET",
            headers: {"Content-Type": "application/json", "Authorization": process.env.API_KEY}
        }

        const response = await 
            fetch(`${apiUrl}/season_averages?season=2022&player_id=${15}`, options)
        const seasons = await response.json()
        console.log('here is season data:', seasons)

        res.json({
            seasons: seasons
        })

    } catch(error) {
        console.error('Error getting player stats:', error)
        res.status(500).json({ error: 'Failed to fetch player stats' })
    }
}