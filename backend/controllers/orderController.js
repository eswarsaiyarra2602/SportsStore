const Order = require('../models/orderModel');
const User = require('../models/userModel');
const Product = require('../models/productModel');
const addOrder = async (req, res) => {
    const { userId, productId, quantity, price, address } = req.body;
    try {
        if (!userId || !productId || quantity == undefined || price == undefined || !address) {
            return res.status(400).json({ msg: "Missing required order details" });
        }
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({msg : "user doesn't exist"});
        }
        const product = await Product.findById(productId);
        if(!productId){
            return res.status(404).json({msg : "product doesn't exist"});
        }
        const newOrder = new Order({
            userId,
            productId,
            quantity,
            price,
            address,
            status: 'pending'
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder); 
    } catch (err) {
        console.error("Error while adding order: ", err);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

const getOrdersByUser = async (req, res) => {
    const userId = req.params.userId;  
    try {
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({msg : "user doesn't exist"});
        }
        const orders = await Order.find({ userId}).populate('productId');  

        if (orders.length === 0) {
            return res.status(404).json({ msg: "No orders found for this user" });
        }

        res.status(200).json(orders);  
    } catch (err) {
        console.error("Error while fetching orders: ", err);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

module.exports = {
    addOrder,
    getOrdersByUser
};