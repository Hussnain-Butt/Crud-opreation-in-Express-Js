const mongoose = require("mongoose")

const URL = "mongodb://localhost:27017/product"

const connectDB = async ()=>{

    try {
        
        await mongoose.connect(URL)
        console.log("MongoDB connected successfully");
        
        
    } catch (error) {
     
        console.error("MongoDb Connection Error",error);
    }

}

module.exports = connectDB;
