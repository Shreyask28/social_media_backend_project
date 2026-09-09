import dotenv from "dotenv";
import connectDb from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: "./.env"
});


const port = process.env.PORT || 8000;

const startServer = async () => {
    try {
        await connectDb();

        app.listen(port, () => {
            console.log(`server is serving on http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Error while starting server:", error);
        process.exit(1);
    }
};

startServer();













/*


import express from "express";
const app =express();

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        app.on("error",(error)=>{
            console.log("Error while connecting to MongoDB",error);
            throw error;
            //error occured due to express server
        })



        app.listen(process.env.PORT,()=>{
            console.log(`server is serving on http://localhost:${process.env.PORT}`);
        })

    }
    catch(error){
        console.log("Error while connecting to MongoDB",error);
        throw error;
    };
    // error due to mongo db

})()

*/
