import React, { useState } from 'react';
import './CartItem.css'
const CartItem = ({ imageUrl, title, weight, price, originalPrice, discount }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="container-fluid border-bottom py-3 mx-5">
      <div className="row align-items-center">
        {/* Image */}
        <div className="col-3 col-md-2">
          <img src={imageUrl} alt={title} className="img-fluid rounded" />
        </div>

        {/* Details */}
        <div className="col-6 col-md-8">
          <h5 className="fw-bold">{title}</h5>
          <p className="text-muted mb-1">{weight}</p>
          <div className="d-flex align-items-center">
            <span className="me-2 text-success fw-bold">₹{price}</span>
            <span className="text-muted text-decoration-line-through me-2">₹{originalPrice}</span>
            <span className="text-danger">{discount} Off</span>
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="col-3 col-md-2 d-flex align-items-center justify-content-end">
          <button className="btn btn-outline-secondary btn-sm" onClick={handleDecrease}>-</button>
          <span className="mx-2">{quantity}</span>
          <button className="btn btn-outline-secondary btn-sm" onClick={handleIncrease}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;