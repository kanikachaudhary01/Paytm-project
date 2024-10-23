

const express = require('express')
const connectDB = require("./config/db")
const dotenv =require('dotenv')
const cors =require("cors")
const rootRouter=require("./routes/index")

const app = express()
app.use(cors())
app.use(express.json())
const port = 3000
dotenv.config()
connectDB()

app.use("/api",rootRouter)



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})



// const express =require("express")
// const cors = require("cors")

// app.use(cors())
// app.use(express.json())

// const mainRouter =require("./routes/index")

// const app = express()

// app.use("/api/v1",mainRouter)
// app.use("/api/v2",v2Router)
// app.listen(3000);