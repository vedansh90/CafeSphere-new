import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import cafeownerRouter from './routes/cafeownerRoute.js'
import userRouter from './routes/userRoute.js'
import cafeRouter from './routes/cafeRoute.js'

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
const corsOptions = {
    origin: 'http://localhost:5173', // Your Vite frontend port
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  };
  app.use(cors(corsOptions));
app.use(express.urlencoded({extended: true}))

// Api endpoints
app.use("/owner", cafeownerRouter); 
app.use("/user", userRouter)
app.use("/cafe", cafeRouter)


app.get("/", (req, res) => {
    res.send("Api working great");
});

app.listen(port, () => {
    console.log("Server Started.....")
})