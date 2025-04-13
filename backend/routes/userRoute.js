import express from 'express'
// import userModel from '../models/userModel'
import { bookedCafes, forgotPassword, resetPassword, saveCafeToUser, savedCafes, userLogin, userProfile, userSignup } from '../controllers/userController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const userRouter = express()

userRouter.post("/save-cafe", authMiddleware, saveCafeToUser);
userRouter.get("/saved-cafes", authMiddleware, savedCafes);
userRouter.post("/login", userLogin);
userRouter.post("/signup", userSignup);
userRouter.post("/login/forgot-password", forgotPassword);
userRouter.post("/login/reset-password", resetPassword);
userRouter.get("/profile/:id", userProfile);   
userRouter.get("/booked-cafes/:id", authMiddleware, bookedCafes) 

export default userRouter