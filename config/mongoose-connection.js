const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://arfath:arfath123@cluster0.xd6eg.mongodb.net/")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.error("MongoDB Connection Error:", err);
});

// Export the connection
module.exports = mongoose.connection;
