import mongoose, { mongo } from "mongoose";
import cafeModel from "./cafeModel.js";
import userModel from "./userModel.js";

const bookingSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    bookingName: {type: String, required: true},
    cafe: {type: mongoose.Schema.Types.ObjectId, ref: "Cafe", required: true},
    date: {type: Date},
    timeSlot: {type: String},
    guests: {type: Number, required: true},
    email: {type: String, required: true},
    contactNo: {type: Number, required: true}
});

const bookingModel = mongoose.model('Booking', bookingSchema);

export default bookingModel;