const apiUrl = process.env.API_URL

exports.getPlayerBySearch = async (req, res) => {
    const playerName = req.query.search
    console.log('search query:', playerName)
    const players = await fetch(`${apiUrl}/players/${playerName}`)
    console.log('here is players with that name:', players)
    res.send('Hi Anthony')
}