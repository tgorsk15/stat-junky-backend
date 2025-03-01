const express = require("express");
const app = express();
const serverless = require("serverless-http")
const cors = require("cors");

require('dotenv').config();


app.use(express.json())

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            
            // change to new deployment url when ready:
            // "https://thedailycoder.netlify.app"
        ]
    })
)
console.log('environment', process.env.HOME)
const basePath = process.env.HOME !== '/Users/Tyler' ? '/prod' : '';

const homeRouter = require('./routes/home')
const playerRouter = require('./routes/player')


//connect routers:

// old:
// app.use("/", homeRouter)
// app.use("/player", playerRouter)

app.use(`${basePath}/`, homeRouter)
app.use(`${basePath}/player`, playerRouter)

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

if (process.env.HOME === '/Users/Tyler') {
    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => console.log(`always watchin you on ${PORT}`))
}



module.exports.handler = serverless(app, {
    basePath: '/prod'
})