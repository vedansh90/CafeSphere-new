import bcrypt from "bcrypt"
import validator from 'validator'
import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
import sendWelcomeEmail from "../utils/welcomeEmail.js"
import { generateOTP, sendResetEmail } from "../utils/sendResetEmail.js"
import bookingModel from '../models/bookingModel.js';
import cafeModel from "../models/cafeModel.js"

const userLogin = async (req, res) => {
    try{
        const {email, password} = req.body

        const user = await userModel.findOne({email})

        if(user){
            // user found
            const isMatch = await bcrypt.compare(password, user.password)
        
            if(!isMatch){
                return res.json({success: false, message: "Incorrect password"})
            }
            const token = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: "30d" });
            console.log("Signing Token With Secret:", process.env.JWT_SECRET);
            console.log(user);
             res.status(200).json({
            success: true,
            message: "Login Successful",
            token,
            userId: user._id,
            userName: user.name,
        });
        }
        else{
            // user not found
            return res.json({success: false, message:"Invalid Email"})
        }
    }
    catch(err){
        console.log(err)
        res.json({success: false, message: err.message})
    }
}

const userSignup = async (req, res) => {

    try{
    
    const {name, email, password, location, contactNo} = req.body;
    console.log(req.body);
    
    if(!name || !email || !password || !location || !contactNo){
        return res.json({success: false, message: "Missing details"})
    }
    
    const isPresent = await userModel.findOne({email})
    if(isPresent){
        return res.json({success: false, message: "User already exists"})
    }

    if(!validator.isEmail(email)){
        return res.json({success: false, message: "Please Enter a valid email"})
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const userData = {
        name, 
        email,
        password: hashedPassword,
        location, 
        contactNo,
    }

    const newUser = new userModel(userData)
    await newUser.save();

    sendWelcomeEmail(newUser.email, newUser.name);

    res.json({success: true, message: "User added successfully"})

    }
    catch(err){
        console.log(err)
        res.json({success: false, message: err.message})
    }

}

const forgotPassword = async (req, res) => {
   try{
    let {email} = req.body;

    if(!email){
        return res.json({success: false, message: "All feilds are required"});
    }

    const user = await userModel.findOne({email: email});
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    if(!user){
        return res.json({success: false, message: "User not found", code});
    }

    const otp = generateOTP();
    const otpExpiry = Date.now() + 10 * 60 * 1000;

    user.resetOTP = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    await sendResetEmail(email, otp);

    res.json({success: true, message: "OTP Sent to your E-mail"});
   }
   catch(err){
    console.error("Forgot password error:", err);
    res.json({success: false, message: err.message})
   }
}

const resetPassword = async (req, res) => {
    try{
        let {otp} = req.body;

        if(!otp){
            return res.json({success: true, message: "Please enter the Code"});
        }

        const user = await userModel.findOne({resetOTP: otp});

        if(!user){
            return res.json({success: false, message: "Invalid code"});
        }

        if(Date.now() > user.otpExpiry) {
            return res.json({ success: false, message: "OTP expired, please request a new one" });
        }

        res.json({success: true, message: "OTP Verified Successfully"});
    }catch(err){
        console.log("Reset password error");
        res.json({success: false, message: err.message});
    }
}

const userProfile = async (req, res) => {
    try{      

        let {id} = req.params;

        const user = await userModel.findById(id)
        .populate({
            path: "bookings",
            populate: {
                path: "cafe",
            }
        })
        .populate({
            path: "savedCafes",
        });
        console.log(user);
        console.log(req.userId);
        console.log("dndn")

        if(!user){
            return res.json({success: false, message: "User not found"});
        }
        console.log(user);

        res.json({success: true, user});
    }catch(err){
        res.json({ message: err.message });
    }
}

const saveCafeToUser = async (req, res) => {
    try {
        
        const user = await userModel.findById(req.user.id);
        if(!user){
            return res.json({success: false, message: "User not found"});
        }

        const {cafeId} = req.body; 
        const cafe = await cafeModel.findById(cafeId);
        if(!cafe){
            return res.json({success: false, message: "Cafe not found"});
        }

        if (user.savedCafes.includes(cafeId)) {
            return res.status(400).json({ message: "Cafe already in wishlist" });
        }

        user.savedCafes.push(cafeId);
        await user.save();

        res.status(200).json({ message: "Cafe added to Saved cafe", savedCafes: user.savedCafes });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
    }
}

const savedCafes = async (req, res) => {
    try{
        
        const user = await userModel.findById(req.user.id)
        .populate({
            path: "savedCafes",
        });
        if(!user){
            return res.json({success: false, message: "User not found"});
        }
        const savedCafe = user.savedCafes;

        res.json({success: true, savedCafes: savedCafe });
        
    }
    catch(err){
        res.json({success: false, message: err.message});
    }
}

const bookedCafes = async (req, res) => {
    try{
        const user = await userModel.findById(req.user.id)
        .populate({
            path: "bookings",
            populate: {
                path: "cafe", 
            }
        });

        if(!user){
            return res.json({success: false, message: "Cafenot found"});
        }
        
        const bookedCafes = user.bookings;
        res.json({success: true, bookedCafes});
    }
    catch(err){
        return res.json({success: false, message: err.message});
    }
}


export {userLogin, userSignup, forgotPassword, resetPassword, userProfile, saveCafeToUser, savedCafes, bookedCafes}