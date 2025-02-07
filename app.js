const express = require("express");
const app = express();

const cookieParser = require("cookie-parser"); // ✅ Correct import
const path = require("path");
const db = require("./config/mongoose-connection")
const ownerRoute = require("./routes/ownerRoute");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser()); // ✅ Correct usage
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("hey");
});

app.use("/owners", ownerRoute);
app.use("/products", productRoute);
app.use("/users", userRoute);



app.listen(27017, () => console.log("Server running on port 5000"));
