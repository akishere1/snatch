const express = require("express");
const router = express.Router();


router.get("/", () =>{
    res.send(" hey this is  working");
});

module.exports = router;