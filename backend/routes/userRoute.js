import express from 'express'
// import userModel from '../models/userModel'
import { userLogin, userSignup } from '../controllers/userController.js'

const userRouter = express()

userRouter.post("/login", userLogin)
userRouter.post("/signup", userSignup)

export default userRouter