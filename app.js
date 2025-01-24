const express = require("express");
const app = express();
const cors = require("cors");

require('dotenv').config();

// app.get("/", (req, res) => res.send("Hello, world!"));

app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            
            // change to new deployment url when ready:
            // "https://thedailycoder.netlify.app"
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