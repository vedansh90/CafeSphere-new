import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const authMiddleware = async (req, res, next) => {
    try {
        let token = req.header("Authorization");
        console.log("Authorization Header:", token);

        if (!token) {
            return res.status(401).json({ success: false, message: "Access Denied -- No Token Provided" });
        }

        // Remove "Bearer " prefix
        if (token.startsWith("Bearer ")) {
            token = token.split(" ")[1];
        }

        console.log("Token After Processing:", token);
        console.log("JWT Secret:", process.env.JWT_SECRET);

        // 🔍 Decode the token without verifying it (for debugging)
        const decoded = jwt.decode(token, { complete: true });
        console.log("Decoded Token:", decoded);

        if (!decoded) {
            return res.status(401).json({ success: false, message: "Invalid Token Format" });
        }

        // ✅ Verify JWT
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Verified Token Payload:", verified);

        req.user = verified;  // Attach user data to request
        next();
    } catch (err) {
        console.error("JWT Verification Error:", err.message);
        return res.status(401).json({ success: false, message: "Invalid Token", error: err.message });
    }
};


export default authMiddleware;
