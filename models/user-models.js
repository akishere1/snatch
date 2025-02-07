const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String, // Fixed typo
    cart: {
        type: Array,
        default: [],
    },
    isadmin: Boolean,
    orders: {
        type: Array,
        default: [],
    },
    contact: Number, // Changed from Number to Number
    picture: String,
});

module.exports = mongoose.model("User", userSchema);
