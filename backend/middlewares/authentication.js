import User from '../models/user_models.js';
import jwt from 'jsonwebtoken';

export const verify_JWT_Token = async (req, res, next)=>{
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    

        console.log(token);
        if(!token){
            return res.status(404).json("Unauthorized Access!");
        }
    
        const decodedToken = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    
        const user = await User.findById(decodedToken?._id).select("-password refreshToken")
    
        console.log(user);
    
        if(!user){
            return res.status(401).json("Invalid Access!");
        }
    
        req.user = user;
        next();
    
    } catch (error) {
        return res.status(401).json("Invalid Access" || error.message);
    }
}