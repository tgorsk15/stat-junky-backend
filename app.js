const express = require("express");
const app = express();

require('dotenv').config();

// app.get("/", (req, res) => res.send("Hello, world!"));

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(
//     cors({
//         origin: [
//             "http://localhost:5173",
//             "https://thedailycoder.netlify.app"
//         ]
//     })
// )

const homeRouter = require('./routes/home')


//connect routers:
app.use("/", homeRouter)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`always watchin you on ${PORT}`))