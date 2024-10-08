const Wishlist = require('../models/wishlistModel');
const Product = require('../models/productModel');

const addToWishlist = async (req, res) => {
    const { productId, userId } = req.body;

    try {
        // Find the product by ID
        const product = await Product.findById(productId);

        // Check if the product exists
        if (product) {
            // Find the user's wishlist
            let wishlist = await Wishlist.findOne({ userId: userId });

            // If no wishlist exists, create a new one
            if (!wishlist) {
                wishlist = new Wishlist({
                    userId: userId,
                    items: [],
                });
            }

            // Check if the product is already in the wishlist
            const itemExists = wishlist.items.some(item => item.toString() === productId);

            if (!itemExists) {
                // If the product is not in the wishlist, add it
                wishlist.items.push(productId);
                await wishlist.save();

                return res.status(200).json({
                    message: 'Product added to wishlist',
                    wishlist,
                });
            } else {
                return res.status(400).json({
                    message: 'Product is already in the wishlist',
                });
            }
        } else {
            return res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: 'Server error', error: err.message });
    }
};

module.exports = { addToWishlist };