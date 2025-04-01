import { model } from 'mongoose';
import bookingModel from '../models/bookingModel.js';
import cafeModel from '../models/cafeModel.js';

const getCafe = async (req, res) => {
    try{
        const cafe = await cafeModel.findById(req.params.id)
        .populate({
            path: "menu",
            model: "Menu",
            select: "itemName price",
        })
        .populate({
            path: "drink",
            model: "Drink",
            select: "itemName price"
        });
        if (!cafe) {
            return res.json({success: false, message: "Cafe not found" });
        }
        res.json(cafe);
    }
    catch(err){
        res.json({ success: false, message: "Error fetching cafe details", err });
    }
}

const searchCafe = async (req, res) => {
    try {
        const searchQuery = req.query.search || "";
        let cafes = await cafeModel.find({
          name: { $regex: searchQuery, $options: "i" },
        }).limit(15);

        if (cafes.length === 0) {
            cafes = await cafeModel.aggregate([{ $sample: { size: 5 } }]);
          }
        res.json(cafes);
      } catch (error) {
        res.status(500).json({ error: "Server error" });
      }
}

const bookCafe = async (req, res) => {

    try{
        const cafeid = req.params.id;
        console.log("backend")
        console.log(cafeid);
        // const userId = req.user._id
        // console.log(userId);

        const {bookingName, email, contactNo, guests, date, timeSlot, partyType, specialRequests} = req.body;

        if(!bookingName || !email || !contactNo || !guests){
            return res.json({success: false, message: "All feilds are required"})
        }

        const cafe = await cafeModel.findById(cafeid);

        if(!cafe){
            return res.json({success: false, message: "Cafe not found"})
        }
        
        const bookingData = {
            // user: req.user._id,
            bookingName, 
            cafe: cafe._id,
            email,
            contactNo,
            guests,
            date,
            timeSlot,
            partyType,
            specialRequests
        };

        const newBooking = new bookingModel(bookingData);
        await newBooking.save();

        cafe.bookings.push(newBooking._id);
        await cafe.save();

        res.json({success: true, message: "Booking Successfull", newBooking});
    }
    catch(err){
        console.log(err);
        res.json({success: false, message: err.message});
    }
}

export {getCafe, bookCafe, searchCafe}