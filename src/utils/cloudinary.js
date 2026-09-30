// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// // Configuration from environment variables
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         if (!localFilePath) return null;
        
//         // Upload the file to Cloudinary
//         const response = await cloudinary.uploader.upload(localFilePath, {
//             resource_type: "auto"
//         });
        
//         // Remove file locally after successful upload
//         fs.unlinkSync(localFilePath);
//         return response;
//     } catch (error) {
//         // Remove temporary file from local storage if upload failed
//         if (fs.existsSync(localFilePath)) {
//             fs.unlinkSync(localFilePath);
//         }
//         return null;
//     }
// };

// export { uploadOnCloudinary };
