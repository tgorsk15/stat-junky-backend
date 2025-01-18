const { BalldontlieAPI } = require("@balldontlie/sdk")


const api = new BalldontlieAPI({ apiKey: process.env.API_KEY })
const apiUrl = process.env.API_URL


exports.homeTest = async (req, res) => {
    const teams = await api.nba.getTeams()
    console.log('here is teams:', teams)
    res.send('Hello Friend')
}

exports.getPlayer = async (req, res) => {
    const players = await fetch(`${apiUrl}/players/?search=davis`)
    console.log('here is davis:', players)
    res.send('Hi Anthony')
}

// tmw 1/18/24 try reforming the fetch call to use the raw url itseld, so I can customize
// the query more and be able to search for specific players
// look at stranger's app example and my fetch method from blog project for guidance