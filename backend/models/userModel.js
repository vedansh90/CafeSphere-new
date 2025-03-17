import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    location: {type: String, required: true},
    contactNo: {type: Number, required: true},
    image: {type: String, default:'https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?uid=R188202810&ga=GA1.1.1482550023.1722440995&semt=ais_hybrid'},
});

const userModel = mongoose.model('user', userSchema)

export default userModel