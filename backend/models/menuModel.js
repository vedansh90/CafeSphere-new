import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
    itemName: {type: String, required: true},
    price: {type: Number, required: true}
})

const menuModel = mongoose.model('Menu', menuSchema)

export default menuModel