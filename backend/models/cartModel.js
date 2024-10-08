const mongoose = require('mongoose');
const cartArrSchema = new mongoose.Schema({
    productId: String,
    count: Number,
})
const cartSchema = new mongoose.Schema({
    userId : String,
    cartArr : [cartArrSchema]
})
const Cart = mongoose.model("Cart", cartSchema);
module.exports= Cart;