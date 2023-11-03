//require express
const express = require('express');


//create instance
const app = express();

//require dotenv
require("dotenv").config()

app.use(express.json())

const connectDB = require("./config/connectDB")
connectDB()

app.use("/api/contact" , require("./routes/contact"))

//create port
const PORT = process.env.PORT

//create server
app.listen(PORT , error =>{
    error ? console.log(`fail to coonect , ${error}`):
    console.log (`server is runing on port ${PORT}`)
})

module.exports= connectDB
