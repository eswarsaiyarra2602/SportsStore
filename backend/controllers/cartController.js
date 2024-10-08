const Cart = require('../models/cartModel');
const User = require('../models/userModel')
const Product = require('../models/productModel');
const addToCart = async(req,res)=>{
    const {productId} = req.body;
    try{
        const product = await Product.findById(productId)
        if(product && product.stock>0){

        }
    }
    catch(error){

    }
};