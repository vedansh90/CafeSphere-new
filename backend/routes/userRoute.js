import express from 'express'
// import userModel from '../models/userModel'
import { forgotPassword, resetPassword, userLogin, userProfile, userSignup } from '../controllers/userController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const userRouter = express()

userRouter.post("/login", userLogin)
userRouter.post("/signup", userSignup)
userRouter.post("/login/forgot-password", forgotPassword);
userRouter.post("/login/reset-password", resetPassword);
userRouter.get("/profile/:id",authMiddleware, userProfile);

export default userRouter