const express = require('express');
const Product = require('../../models/productModel');
const route = express.Router();
route.post('/add-product', async (req, res) => {
    try {
        const { productName,
            oldPrice,
            currPrice,
            stock,
            desc,
            productImgUrls } = req.body;
        // input validation
        if(!productName || !oldPrice || !currPrice || !stock || !desc || !productImgUrls){
            return res.status(400).json({
                err: "missing input data"
            })
        }
        if(stock<=0){
            return res.status(400).json({
                err : "stock should be greater than zero"
            })
        }
        const result = await Product.create({
            productName,
            oldPrice,
            currPrice,
            stock,
            desc,
            productImgUrls
        });

        return res.json(result);
    }
    catch (err) {
        console.err("Internal Server Error", err);
        return res.status(500).json({err: "internal serval server"});
    }
})
module.exports = route;