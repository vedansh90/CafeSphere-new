import express from 'express'
import {addCafe, AddDrinks, AddItemToMenu, cafeLogin, getCafes, getOneCafe} from '../controllers/cafe-OwnerController.js'
import upload from '../middleware/multer.js'

const cafeownerRouter = express()

cafeownerRouter.post("/add-cafe", upload.single('image'), addCafe);
cafeownerRouter.get('/get-cafes', getCafes); 
cafeownerRouter.post("/login", cafeLogin);
cafeownerRouter.get("/owner-dashboard/:id", getOneCafe);
cafeownerRouter.post("/owner-dashboard/:id/menu", AddItemToMenu);
cafeownerRouter.post("/owner-dashboard/:id/menu/drink", AddDrinks);

// cafeownerRouter.post("/signup", cafeOwnerSignup)
// cafeownerRouter.get("/get-cafeowner/:id", getCafeOwner)
// cafeownerRouter.post("/login", cafeOwnerLogin)


export default cafeownerRouter;