import {v2 as cloudinary} from cloudinary;
import fs from fs;

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        // upload the file on cloudinary
        const respose = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log("file has been uploaded successfully",
        respose.url);
        return respose;
        // file has been uploaded successfully
    } catch (error) {
        fs.unlink (localFilePath) //remove the
        //locally saved temporary file as upload
        //operation got failed
        return null;
    }
}
export {uploadOnCloudinary}