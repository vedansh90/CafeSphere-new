import validator from 'validator'
import {v2 as cloudinary} from 'cloudinary'
import cafeModel from '../models/cafeModel.js';
import cafeOwnerModel from '../models/cafeOwnerModel.js';
import bcrypt, { compareSync } from 'bcrypt'
import jwt from "jsonwebtoken"
import userModel from '../models/userModel.js';
import menuModel from '../models/menuModel.js';
import drinkModel from '../models/drinkModel.js';
import { model } from 'mongoose';


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

const cafeLogin = async (req, res) => {

    try{
        let {email, password} = req.body;

        const cafe = await cafeModel.findOne({email});

        if(cafe){
            // cafe found
            const isMatch = await bcrypt.compare(password, cafe.password);

            if(!isMatch){
                return res.json({success: false, message: "Incorrect Password"})
            }
            const token = jwt.sign({ id: cafe._id }, "your_secret_key", { expiresIn: "1h" });
            console.log(cafe);
            return res.status(200).json({
            success: true,
            message: "Login Successful",
            token,
            userId: cafe._id,
            userName: cafe.name 
            });
        }
        else{
            return res.json({success: false, message: "Cafe not found"})
        }
    }
    catch(err) {
        console.log(err)
        return res.json({success: false, message: err.message})
    }

}

const getOneCafe = async (req, res) => {

    try{
        const {id} = req.params;
        const cafe = await cafeModel.findById(id)
        .populate({
            path: "bookings", 
            model: "Booking",
            select: "guests date timeSlot bookingName", 
        })
        .populate({
            path: "menu",
            model: "Menu",
            select: "itemName price",
        });

        if(!cafe){
            return res.json({success: false, message: "Cafe Not Found"})
        }
        return res.json(cafe);
    }
    catch(err){
        return res.json({success: false, message: err.message})
    }
}

const AddItemToMenu = async (req, res) => {
    try{

        let {itemName, price} = req.body;
        let {id} = req.params;

        if(!itemName || !price){
            return res.json({success: false, message: "All feilds are required"});
        }

        const cafe = await cafeModel.findById(id);

        if(!cafe){
            return res.json({success: false, message: "Cafe Not found"});
        }

        const newMenu = new menuModel({itemName, price});
        await newMenu.save();

        cafe.menu.push(newMenu._id);
        await cafe.save();

        res.json({success: true, message: "Menu Added"})
    }
    catch(err){
        console.log(err.message);
        return res.json({success: false, message: err.message});
    }
}

const getMenu = async (req, res) => {

    try{
        let {id} = req.params;

        const cafe = await cafeModel.findById(id).populate({
            path: "menu", 
            model: "Menu",
            select: "itemName price", 
        });

        if(!cafe){
            return res.json({success: false, message: "Cafe Not found"});
        }

        return res.json({success: true, menu: cafe.menu})
    }
    catch(err){
        res.json({success: false, message: err.message});
    }
}

const AddDrinks = async (req, res) => {
    try{
        const {itemName, price} = req.body;
        const {id} = req.params;

        if(!itemName || !price){
            return res.json({success: false, message: "All feilds are required"});
        }

        const cafe = await cafeModel.findById(id);

        if(!cafe){
            return res.json({success: false, message: "Cafe not found"})
        }

        const newDrink = new drinkModel({itemName, price});
        await newDrink.save();

        cafe.drink.push(newDrink._id);
        await cafe.save();

        res.json({success: true, message: "Drink Added"});
    }
    catch(err){
        res.json({success: false, message: err.message});
    }
}

export {addCafe, getCafes, cafeLogin, getOneCafe, AddItemToMenu, AddDrinks};