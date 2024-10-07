const mongoose = require("mongoose");
const db = "mongodb://localhost:27017/myApp";  

const connectDB = async () => {
    try {
        await mongoose.connect(db, {});
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("Error: connection to MongoDB", error);
        process.exit(1);
    }
};
module.exports  = connectDB;