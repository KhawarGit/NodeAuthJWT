// require('dotenv').config()
const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const app = express()

dotenv.config({
    path: './env'
})
require('./db/config.js');

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port : ${process.env.PORT}`)
})
