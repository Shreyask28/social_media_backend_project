import dotenv from "dotenv";
import connectDb from "./db/index.js";

dotenv.config({
    path: "./.env"
});

connectDb();
















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