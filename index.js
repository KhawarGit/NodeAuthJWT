// require('dotenv').config()
const dotenv = require('dotenv')
const app = require('./app.js')
const { connectDB } = require('./db/config.js');
dotenv.config({
    path: './env'
})

// "immediately invoked function expression" (IIFE)
;(async() => {
  try{
      await connectDB();
      app.listen(process.env.PORT || 8000, () => {

        console.log(`Server is running on port : ${process.env.PORT} or 8000`)
    })
  } catch(error){
    console.log("MONGO db Connection Failed in index.js !!! ", err)
  }

})()


