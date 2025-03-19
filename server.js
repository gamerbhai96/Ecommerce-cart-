const express = require("express");
const cors = require("cors")
const connectDB = require("./config/db");
const router = require("./routes/authRoutes");
const cartrouter =require('./routes/cartRoutes')
connectDB()
const app = express();

app.use(cors())

app.use(express.json())
app.use("/auth" ,router)
app.use("/cart" ,cartrouter)

//middleware
app.get('/', (req, res) => {
    res.send("hello world")
})

const port = 5000

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
}
)