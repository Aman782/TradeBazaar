import User from '../models/user_models.js';
import jwt from 'jsonwebtoken';

export const verify_JWT_Token = async (req, res, next) => {
    try {
        // Extract token from cookies or Authorization header
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        console.log("Token:", token);

        if (!token) {
            return res.status(401).json({ error: "Unauthorized Access! No token provided." });
        }

        // Verify the token
        let decodedToken;
        try {
            decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            console.log("Decoded Token:", decodedToken);
        } catch (err) {
            console.error("JWT Verification Error:", err.message);
            return res.status(401).json({ error: "Invalid or expired token" });
        }

        const user = await User.findById(decodedToken?._id).select('email username createdAt'); // Exclude password and refreshToken explicitly

        console.log("User:", user);

        if (!user) {
            return res.status(401).json({ error: "Invalid Access! User not found." });
        }

        req.user = user;

        next();
    } catch (error) {
        console.error("Error in verify_JWT_Token middleware:", error.message);
        return res.status(500).json({ error: "Server Error", message: error.message });
    }
};
