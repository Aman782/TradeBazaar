import User from '../models/user_models.js';
import jwt from "jsonwebtoken"


export const registerUser = async (req, res)=>{
    try {
        const {username, email, password} = req.body;
    
        const user = await User.findOne({
            $or: [{username}, {email}]
        });
    
        if(user){
            return res.status(401).json("User already exists!");
        }
    
        const newUser = await User.create({
            username,
            email,
            password
        });
    
        const resUser = await User.findById(newUser._id).select("-password -refreshToken");
        if(!resUser){
            return res.status(500).json("Something went wrong!");
        }
    
        return res.status(201).json(resUser);
    } catch (error) {
        return res.status(500).json("Internal Server Error!");
    }
}

export const loginUser = async(req, res)=>{
   // take user credentials from body

   try {
    const {email, password} = req.body;
 
    if(!email || !password){
      return res.status(401).json("Invalid Access, credentials required!");
    }
 
    const user = await User.findOne({email});
 
    if(!user){
       return res.status(401).json("Invalid Credentials, try again");
    }
 
     const verifyPassword = await user.isPasswordCorrect(password);
 
     if(!verifyPassword){
         return res.status(401).json("Incorrect password, try again!");
     }
 
 
     //generate access and refreshToken
 
     const {accessToken, refreshToken} = await generateAccessTokenAndRefreshToken(user._id);
     
     const LoggedInUser = await User.findById(user._id).select("-password -refreshToken");
 
     const options = {
         httpOnly: true,
         secure: false,
         sameSite: 'Lax',
     }
 
 
     return res.status(200)
     .cookie("accessToken", accessToken, options)
     .cookie("refreshToken", refreshToken, options)
     .json({
         "accessToken": accessToken,
         "refreshToken": refreshToken,
         "message": "User LoggedIn Successfully"
     });
   } catch (error) {
      return res.status(500).json("Something went wrong!");
   }

}

export const logOutUser = async (req, res)=>{
   try {
    await User.findByIdAndUpdate(req.user._id, {
      $unset:{
         refreshToken: 1,
      }
      
    }, 
    {
     new: true
  });
 
    const options  = {
     httpOnly: true,
     secure: false,
     sameSite: 'Lax',
    }
 
 
    return res.status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(req.user);
   } catch (error) {
     return res.status(500).json("Something went wrong!");
   }
}



const generateAccessTokenAndRefreshToken = async (userId)=>{
   const user = await User.findById(userId);

   const accessToken = user.generateAccessToken();
   const refreshToken = user.generateRefreshToken();
   
   console.log(`AccessToken: ${accessToken}, RefreshToken: ${refreshToken}`);
   user.refreshToken = refreshToken;

   await user.save({validateBeforeSave: false});
   return {accessToken, refreshToken};
}