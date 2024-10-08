const Cart = require('../models/cartModel');
const User = require('../models/userModel');
const Product = require('../models/productModel');

const addToCart = async (req, res) => {
    const { productId, userId } = req.body;
    try {
        const product = await Product.findById(productId);
        if (product && product.stock > 0) {
            let cart = await Cart.findOne({ userId: userId });
            if (!cart) {
                cart = new Cart({
                    userId: userId,
                    items : [],
                });
            }
            const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

            if (itemIndex > -1) {
                cart.items[itemIndex].quantity += 1;
            } else {
                cart.items.push({
                    productId: productId,
                    quantity: 1,
                });
            }
            await cart.save();
            return res.status(200).json({
                message: 'Product added to cart',
                cart,
            });
        } else {
            return res.status(404).json({ message: 'Product not available or out of stock' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { addToCart };