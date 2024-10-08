const mongoose = require('mongoose');
const wishlistSchema = new mongoose.Schema({
    userId: String,
    items : [String]
})
const Wishlist = mongoose.model("Wishlist", wishlistSchema);
module.exports= Wishlist;