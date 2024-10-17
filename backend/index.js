// const express = require("express")

const express = require('express')
const connectDB = require("./config/db")
const dotenv =require('dotenv')
const app = express()
// const port = 3000
dotenv.config()
connectDB()

app.get('/kanika', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})