// require('dotenv').config()
const dotenv = require('dotenv')
const app = require('./app.js')
const { connectDB } = require('./db/config.js');
const { PORT } = require('./constants.js')

dotenv.config({
    path: './env'
})

// "immediately invoked function expression" (IIFE)
//check info about IIFE in ./db/config.js
;(async() => {
  try{
      await connectDB();
      app.listen(PORT, () => {
        console.log(`Server is running on port : ${PORT}`)
    })
  } catch(error){
    console.log("MONGO db Connection Failed in index.js !!! ", err)
  }

})()


