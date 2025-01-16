const { BalldontlieAPI } = require("@balldontlie/sdk")


const api = new BalldontlieAPI({ apiKey: process.env.API_KEY })


exports.homeTest = async (req, res) => {
    const teams = await api.nba.getTeams()
    console.log('here is teams:', teams)
    res.send('Hello Friend')
}