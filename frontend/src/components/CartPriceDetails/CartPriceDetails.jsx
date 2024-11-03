import './CartPriceDetails.css';
import React from 'react'; 

const CartPriceDetails = ({ itemsCount, mrp, discount, deliveryFee, totalAmount, savings }) => {
  return (
    <div>
          <div className="card p-3 my-3 shadow-sm">
          <h5 className="fw-bold mb-3">Price Details</h5>
          
          <div className="d-flex justify-content-between mb-2">
            <span>MRP ({itemsCount} items)</span>
            <span className="text-muted">₹{mrp}</span>
          </div>
          
          <div className="d-flex justify-content-between mb-2">
            <span>Product Discount</span>
            <span className="text-danger">− ₹{discount}</span>
          </div>
          
          <div className="d-flex justify-content-between mb-3">
            <span>Delivery Fee</span>
            <span className="text-muted">₹{deliveryFee}</span>
          </div>
          
          <div className="border-top pt-3 d-flex justify-content-between mb-3">
            <strong>Total Amount</strong>
            <strong className="text-success">₹{totalAmount}</strong>
          </div>
          
          <div className="text-success text-center">
            You will save ₹{savings} on this order
          </div>
        </div>
    </div>
  );
};

export default CartPriceDetails;
