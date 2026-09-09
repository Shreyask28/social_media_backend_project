import mongoose ,{Shema } from "mongoose";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";


const userSchema = new Shema(
    {
        username:{
            type : string,
            required : true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
            

        },
        email:{
            type : string,
            required : true,
            unique:true,
            lowercase:true,
            trim:true,

        },
        fullname:{
            type : string,
            required : true,
            trim:true,
            index:true

        },
        avatar:{
             type : string,//cloudinary url
            required : true,
        },
        coverImage:{
            type:string,//cloudinary url
            required:true,
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"video"
            }
        ],
        password:{
            type:string,
            required:[true,"password is required"]

        },
        refreshToken:{
            type:string,
            required:[true,"refresh token is required"]
        }
           

        


    },{
        timestamp:true
    }

    
)  

export const User=mongoose.model("User",userSchema);
