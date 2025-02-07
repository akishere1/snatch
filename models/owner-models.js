const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String, // Fixed typo
    product: {
        type: Array,
        default: [],
    },
    contact: Number, // Changed from Number to Number
    gstin:Number,
});

module.exports = mongoose.model("owner", ownerSchema);
