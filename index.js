require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()

require('./db/config.js');

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port : ${process.env.PORT}`)
})
