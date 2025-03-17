import express from 'express'
import {addCafe, getCafes} from '../controllers/cafe-OwnerController.js'
import upload from '../middleware/multer.js'

const cafeownerRouter = express()

cafeownerRouter.post("/add-cafe", upload.single('image'), addCafe);
cafeownerRouter.get('/get-cafes', getCafes); 

// cafeownerRouter.post("/signup", cafeOwnerSignup)
// cafeownerRouter.get("/get-cafeowner/:id", getCafeOwner)
// cafeownerRouter.post("/login", cafeOwnerLogin)


export default cafeownerRouter;