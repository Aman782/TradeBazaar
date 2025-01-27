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
         secure: true,  // ✅ Enable HTTPS
         sameSite: "None", // ✅ Allow cross-origin cookie sharing
         domain: ".vercel.app", // ✅ Makes cookies accessible across subdomains
      };
  
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
              secure: true,  // ✅ Enable HTTPS
              sameSite: "None", // ✅ Allow cross-origin cookie sharing
              domain: ".vercel.app", // ✅ Makes cookies accessible across subdomains
           };
      
          return res.status(200)
          .clearCookie("accessToken", options)
          .clearCookie("refreshToken", options)
          .json(req.user);
      } catch (error) {
         return res.status(400).json("Invalid Access Token!");
      }
};

export const buyingStocks = async(req, res)=>{
  const {searchText, qty, price} = req.body;

  const userId = req.user._id;
  const isUserExists = await User.findById(userId);
  if(!isUserExists){
    return res.status(404).json("User not Authorized");
  }

  let netCost = Math.round(qty * price);
  if(isUserExists.margin < netCost){
     return res.status(400).json("Insufficient Balance, please add funds!");
  }
  
  let remainingMargin = isUserExists.margin - netCost;

  const newStock = {
    stockName: searchText,
    quantity: qty,
    purchasePrice: price,
    datePurchased: Date.now(),
  }

  try {
    const updatedUserInfo = await User.findByIdAndUpdate(userId, {
      $push: {holdings: newStock},
      $set: { margin: remainingMargin },
    },
  {new: true,
    validateBeforeSave: false
  }
  );
  console.log(updatedUserInfo);
  } catch (error) {
    return res.status(500).json("Internal Error, try again!");
  }
}

export const addFunds = async(req, res)=>{
  try {
     const {updatedBalance} = req.body;
     console.log(updatedBalance);
     const userId = req.user._id;
  
      const user = await User.findById(userId);
      if(!user){
        return res.status(404).json("User does not Exists, Invalid Access!");
      }
  
      const updatedUserInfo = await User.findByIdAndUpdate(userId, {
        $set: {margin: updatedBalance}, 
      }, {
        new:true,
        validateBeforeSave: false
      });
  
      console.log(updatedUserInfo);
      return res.status(201).json("Funds Added Successfully!");
  } catch (error) {
    return res.status(500).json("Internal Server Error, try again!");
  }
}

export const getMargin = async(req, res)=>{
  const userId = req.user._id;

  const user = await User.findById(userId).select("-password -refreshToken");
  console.log(user);
  if(!user){
    return res.status(404).json("User does not exists, Invalid Access Req!");
  }

  return res.status(200).json(user);
}

export const sellStocks = async(req, res) =>{
try {
     const {selledStockMargin, stockName, qty} = req.body;
  
     const userId = req.user._id;
  
     const user = await User.findById(userId);
     console.log(qty);
  
     if(!user){
      return res.status(404).json("User does not exists, sellStocks fn!");
     }
  
      const currUser = await User.findOne({_id: userId, "holdings.stockName": stockName});

      let userHoldings = currUser.holdings;
      let currUserMargin = currUser.margin;
      for(let holding of userHoldings){
        if(holding.stockName === stockName){
          holding.quantity -= qty;
          if(holding.quantity === 0){
            userHoldings = userHoldings.filter(h => h.stockName !== stockName);
            break;
          }
        }
      }

      currUser.holdings = userHoldings;
      currUser.margin = currUserMargin + selledStockMargin;
      
      await currUser.save({validateBeforeSave: false});


      console.log("updated user information", currUser);
  
      return res.status(200).json(currUser);
} catch (error) {
  console.log(error);
  return res.status(500).json("Internal Server Error, In SellStocks!");
}
}

// const generateAccessTokenAndRefreshToken = async (userId) => {
//   const user = await User.findById(userId);

//   const accessToken = user.generateAccessToken();
//   const refreshToken = user.generateRefreshToken();

//   console.log(`AccessToken: ${accessToken}, RefreshToken: ${refreshToken}`);
//   user.refreshToken = refreshToken;

//   await user.save({ validateBeforeSave: false });
//   return { accessToken, refreshToken };
// };
