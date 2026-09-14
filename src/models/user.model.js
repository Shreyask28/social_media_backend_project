import mongoose, { Shema } from "mongoose";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";


const userSchema = new Shema(
    {
        username: {
            type: string,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true


        },
        email: {
            type: string,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,

        },
        fullname: {
            type: string,
            required: true,
            trim: true,
            index: true

        },
        avatar: {
            type: string,//cloudinary url
            required: true,
        },
        coverImage: {
            type: string,//cloudinary url
            required: true,
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "video"
            }
        ],
        password: {
            type: string,
            required: [true, "password is required"]

        },
        refreshToken: {
            type: string,
            required: [true, "refresh token is required"]
        }





    }, {
    timestamp: true
}


)
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next()

})
userSchema.method.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        }
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        }
        process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }

    )
}

export const User = mongoose.model("User", userSchema);
