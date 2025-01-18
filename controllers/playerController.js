const apiUrl = process.env.API_URL

exports.getPlayer = async (req, res) => {
    const players = await fetch(`${apiUrl}/players/?search=davis`)
    console.log('here is davis:', players)
    res.send('Hi Anthony')
}