const express = require('express');
const cors = require('cors');
const cokkieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

//Cogifuring
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(bodyParser.json())
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

module.exports = app;