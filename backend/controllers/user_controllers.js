import User from "../models/user_models.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    console.log(
      `Username: ${username}, Email: ${email}, Password: ${password}`
    );
    if ([username, email, password].some((field) => field?.trim() === "")) {
      return res.status(400).json({ error: "All Fields Required!" });
    }

    const newUser = new User({
      username: username,
      email: email,
      password: password,
    });

    newUser.refreshToken = newUser.generateRefreshToken();
    console.log(newUser);
    await newUser.save({ validateBeforeSave: false });
    if (!newUser) {
      return res
        .status(500)
        .json({ error: "Internal Server Issues! Try again later." });
    }

    return res.status(200).json({ message: "User created Successfully" });
  } catch (error) {
    return res.send(error);
  }
};
export const loginUser = async (req, res) => {
    try {
      // take user credentials from body
      const { email, password } = req.body;
    
      if (!email || !password) {
        return res.status(400).json("All Fields required");
      }
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json("User does not exist!");
      }
  
      const verification = await user.isPasswordCorrect(password);
  
      if (!verification) {
        return res.status(401).json("Unauthorized Access!");
      }
      
      const accessToken = user.generateAccessToken();
  
      const options = {
        httpOnly: true,
        secure: false,
        sameSite: 'Lax',
      }
  
      return res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", user.refreshToken, options)
        .json({ "message": "User LoggedIn Successfully" });
    
    } catch (error) {
      console.error("Error during login:", error.message);
      return res.status(500).json({ error: "Server Error", message: error.message });
    }
  };
  

export const logOutUser = async (req, res) => {
  try {
          await User.findByIdAndUpdate(req.user._id, {
              $unset:{
                  refreshToken: 1,
              }
          },
          {
              new: true
          });
      
          const options = {
              httpOnly: true,
              secure: false,
              sameSite: 'Lax'
          }
      
          return res.status(200)
          .clearCookie("accessToken", options)
          .clearCookie("refreshToken", options)
          .json(req.user);
      } catch (error) {
         return res.status(400).json("Invalid Access Token!");
      }
};

// const generateAccessTokenAndRefreshToken = async (userId) => {
//   const user = await User.findById(userId);

//   const accessToken = user.generateAccessToken();
//   const refreshToken = user.generateRefreshToken();

//   console.log(`AccessToken: ${accessToken}, RefreshToken: ${refreshToken}`);
//   user.refreshToken = refreshToken;

//   await user.save({ validateBeforeSave: false });
//   return { accessToken, refreshToken };
// };
