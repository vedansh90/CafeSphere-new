import bcrypt from "bcrypt"
import validator from 'validator'
import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"

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
            const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });
            console.log(user);
             res.status(200).json({
            success: true,
            message: "Login Successful",
            token,
            userId: user._id,
            userName: user.name 
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
    // checking all values are present or not
    if(!name || !email || !password || !location || !contactNo){
        return res.json({success: false, message: "Missing details"})
    }
    

    // check if the user is already present
    const isPresent = await userModel.findOne({email})
    if(isPresent){
        return res.json({success: false, message: "User already exists"})
    }

    // check the email is valid
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
    await newUser.save()

    res.json({success: true, message: "User added successfully"})

    }
    catch(err){
        console.log(err)
        res.json({success: false, message: err.message})
    }

}

export {userLogin, userSignup}