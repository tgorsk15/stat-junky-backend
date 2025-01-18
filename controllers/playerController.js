const { BalldontlieAPI } = require("@balldontlie/sdk")
const api = new BalldontlieAPI({ apiKey: process.env.API_KEY })

const apiUrl = process.env.API_URL

exports.getPlayerBySearch = async (req, res) => {
    const playerName = req.query.search
    console.log('search query:', playerName)

    try {
        const options = {
            method: "GET",
            headers: {"Content-Type": "application/json", "Authorization": process.env.API_KEY},
            // meta: {"per-page": 100}
        }

        const response = await fetch(`${apiUrl}/players?search=${playerName}&per_page=100`, options)
        const players = await response.json()

        console.log('here is players with that name:', players)
        res.send('Hi Anthony')
    } catch {
        console.error('Error fetching player:', error)
        res.status(500).json({ error: 'Failed to fetch player data' })
    }
    
}