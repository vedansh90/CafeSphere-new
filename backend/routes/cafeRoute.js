import express from 'express'
import { getCafe } from '../controllers/cafeContoller.js';
const cafeRouter = express();

cafeRouter.get("/:id", getCafe)

export default cafeRouter;