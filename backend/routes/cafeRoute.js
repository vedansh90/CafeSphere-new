import express from 'express'
import { bookCafe, getCafe, searchCafe } from '../controllers/cafeContoller.js';
// import authMiddleware from '../middleware/authMiddleware.js';
const cafeRouter = express();

cafeRouter.get("/:id", getCafe)
cafeRouter.post("/:id/book", bookCafe)
cafeRouter.get("/", searchCafe);

export default cafeRouter;