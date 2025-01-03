import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    refreshToken: {
        type: String,
    },

    holdings: [
        {
            stockName: { type: String, required: true },  
            quantity: { type: Number, required: true },    
            purchasePrice: { type: Number, required: true }
        }
    ],

    margin: {
        type: Number,
        required: true,
        default: 0, 
    }

}, { timestamps: true });



userSchema.pre("save", async function(next){
    if(!this.isModified("password")){return next();}

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = function(password){
    return bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
        _id: this._id,
        username: this.username,
        email: this.email,
    },

    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
)};
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id, 
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    );
};

export default mongoose.model("User", userSchema);
