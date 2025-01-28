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
exports.getAllSeasons = async (id, draftYear) => {
    let seasons = []
    let currentYear = draftYear

    try {
        const options = {
            method: "GET",
            headers: {"Content-Type": "application/json", "Authorization": process.env.API_KEY}
        }

        for (let i = 0; i < 15; i++) {
            const response = await 
                fetch(`${apiUrl}/season_averages?season=${currentYear}&player_id=${id}`, options)
            const season = await response.json()
            seasons.push(season)
            currentYear += 1
            if (currentYear == 2025) break
        }
        return seasons 
    } catch(err) {
        console.error('Error getting season:', currentYear)
        throw err
    }
    

}

exports.getPlayerSeasons = async (req, res) => {
    const playerData = req.body
    const {id, draft_year} = playerData
    console.log(playerData)
    try {
        const seasons = await this.getAllSeasons(id, draft_year)
        console.log('here is the returned seasonal data:', seasons)

        res.json({
            seasons: seasons
        })

    } catch(error) {
        console.error('Error getting players stats:', error)
        res.status(500).json({ error: 'Failed to fetch player stats' })
    }
}