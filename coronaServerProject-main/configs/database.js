const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/HmoDB",()=>{
    console.log("connected to mongoDB")
})