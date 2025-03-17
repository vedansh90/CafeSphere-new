import validator from 'validator'
import {v2 as cloudinary} from 'cloudinary'
import cafeModel from '../models/cafeModel.js';
import cafeOwnerModel from '../models/cafeOwnerModel.js';
import bcrypt, { compareSync } from 'bcrypt'
import jwt from "jsonwebtoken"
import userModel from '../models/userModel.js';

// Api for adding cafe
const addCafe = async (req, res) => {
    try{
        const {name, email, password, ownerName, location, city, image, contactNo, slots_booked} = req.body;
        const imageFile = req.file

        // checking for all data to add cafe
        if(!name || !email ||!ownerName || ! location || !city || !contactNo || !password){
            return res.json({success: false, message: "Missing details"})
        }

        const newOne = await cafeModel.findOne({email});

        // check is cafe already exists 
        if(newOne){
            return res.json({success: true, message: "Cafe Already exist"})
        }

        // checking for email validation
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Please enter a valid email"})
        }

        // const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"})
        // const image_url = imageUpload.secure_url

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const cafeData = {
            name, 
            email,
            password: hashedPassword,
            ownerName,
            location,
            city,
            contactNo
        }
        
        const newcafe = new cafeModel(cafeData)
        await newcafe.save()

        res.json({success: true, message: "Cafe Added Successfully"})

    }
    catch(err){
        console.log(err)
        res.json({success: false, message: err.message})
    }
}

// get cafe
const getCafes = async (req, res) => {
    try {
        const cafes = await cafeModel.find();
        res.json(cafes);
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
    }
};


export {addCafe, getCafes};