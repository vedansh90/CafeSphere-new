import mongoose from "mongoose";

const drinkSchema = ({
    itemName: {type: String, required: true},
    price: {type: Number, required: true}
})

const drinkModel = mongoose.model('Drink', drinkSchema);

export default drinkModel