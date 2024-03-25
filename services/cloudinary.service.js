import { v2 as Cloudinary } from "cloudinary";
import { log } from "console";
const fs = require("fs");
         
cloudinary.config(
  {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
  }
);

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    //uploading file on CLoudinary
    const response = await Cloudinary.uploader.upload(
      localFilePath,
      //providing upload options as second parameter.
      {
        resource_type: "auto"
      }
    );

    //file upload successfully.
    console.log("file Uploaded successfully on Cloudinary");
    console.log("The response object is : ", response);
  
  } catch (error) {
    
  }
};
