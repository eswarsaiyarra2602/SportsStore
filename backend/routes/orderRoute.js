const express  = require('express');
const router = express.Router();
const { addOrder, getOrdersByUser} = require('../controllers/orderController');
router.post('/add-order',addOrder);
router.get('/all-orders/:userId',getOrdersByUser);
module.exports = router;