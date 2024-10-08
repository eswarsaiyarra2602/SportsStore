const express = require('express');
const {addToWishlist}  = require('../controllers/wishlistController');
const router = express.Router();
router.post('/add-to-wishlist', addToWishlist);
module.exports = router;