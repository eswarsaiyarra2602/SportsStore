const mongoose = require('mongoose');
const cartArrSchema = new mongoose.Schema({
    productId: String,
    quantity : Number,
})
const cartSchema = new mongoose.Schema({
    userId : String,
    items : [cartArrSchema]
})
const Cart = mongoose.model("Cart", cartSchema);
module.exports= Cart;