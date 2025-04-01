import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) return res.status(401).json({ success: false, message: "Access Denied" });

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(verified.id).select("-password"); // Attach user to request
        next();
    } catch (err) {
        res.status(401).json({ success: false, message: "Invalid Token" });
    }
};

export default authMiddleware;
