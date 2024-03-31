const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // file -> comes with request, can be handled by multer or express file handler.
      cb(null, "./public/temp")
      // Here cb has two parameters 
      // 1) Error Handler , which we currently provided as null.
      // 2) the folder path to store that file.
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      console.log(this.filename);
      cb(null, file.originalname + '-' + uniqueSuffix)
    }
  })
  
// const upload = multer({ storage: storage })

export const upload = multer ({
    storage,
})