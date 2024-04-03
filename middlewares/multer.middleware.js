const multer = require("multer");
// multer middleware for file upload on server, then this file will be uploaded on cloudinary by using cloudinary.service.js

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // file -> comes with request, can be handled by multer or express file handler.
      cb(null, "./public/temp")
      // Here cb has two parameters 
      // 1) Error Handler , which we currently provided as null.
      // 2) the folder path to store that file.
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) // generating unique key/string to be concatenated with the original filename, to generate a unique name for each file uploaded on server , so that no file will be over-written with the upcoming file.
      console.log(this.filename);
      cb(null, file.originalname + '-' + uniqueSuffix)
    }
  })
  
// const upload = multer({ storage: storage })

export const upload = multer ({
    storage, // in ES6 we can export function like this , if the function signature and export name are both same.
})