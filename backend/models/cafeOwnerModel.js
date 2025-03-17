import mongoose from "mongoose";

const cafeOwnerSchema = mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true},
    contactNo: {type: String, required:true},
    cafes: [{ type: mongoose.Schema.Types.ObjectId, ref: "cafe", default:[] }],
    entity: {
        type: String,
        default: "cafeowner",
    }
})

const cafeOwnerModel = mongoose.model("cafeOwner", cafeOwnerSchema)

export default cafeOwnerModel