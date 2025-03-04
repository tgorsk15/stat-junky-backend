const express = require("express");
const app = express();
const cors = require("cors");

require('dotenv').config();


app.use(express.json())

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://stat-junky.netlify.app"
        ]
    })
)

const homeRouter = require('./routes/home')
const playerRouter = require('./routes/player')


//connect routers:
app.use("/", homeRouter)
app.use("/player", playerRouter)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`always watchin you on ${PORT}`))


