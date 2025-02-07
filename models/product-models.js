const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    image: String,
    name: String,
    password: String, // Fixed typo
    discount: {
        type: Number,
        default: 0,
    },
    bgcolor: String,
    panelcolor:String,
    price: Number, // Changed from Number to Number
    textcolor: String,
});

module.exports = mongoose.model("products", productSchema);