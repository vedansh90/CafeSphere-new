const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let cafeSchema = new Schema({
    cafeName: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
    },
    image : {
        type: String
    },
    location: String,
    city: String,
    contactNo : Number
});

module.exports = mongoose.model("Cafe", cafeSchema);