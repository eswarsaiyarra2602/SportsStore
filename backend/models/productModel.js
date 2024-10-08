const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    productName : String,
    oldPrice : Number,
    currPrice : Number,
    stock : Number, 
    desc : String,
    productImgUrls : [String]
})
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;