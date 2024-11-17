import React from 'react';
import './CartItem.css';

const CartItem = ({ imageUrl, title, weight, price, originalPrice, discount, quantity, rating, rating_count, onDecrease, onIncrease }) => {
  let badgeClass = '';
  if (rating > 3.5) {
    badgeClass = 'green-badge';
  } else if (rating >= 3 && rating <= 3.5) {
    badgeClass = 'yellow-badge';
  } else {
    badgeClass = 'red-badge';
  }

  return (
    <div className="container-fluid border-bottom py-3 mx-5 order-card container-fluid shadow-sm rounded p-3 mb-4">
      <div className="row align-items-center">
        {/* Product Image */}
        <div className="col-4 col-md-3 text-center" style={{ height: '120px', overflow: 'hidden' }}>
          <img
            src={imageUrl}
            alt={title}
            className="img-fluid rounded"
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '100%',
            }}
          />
        </div>

        {/* Product Details */}
        <div className="col-5 col-md-6 d-flex flex-column justify-content-between">
          <div>
            <h5 className="mb-1">{title}</h5>
            <p className="text-muted mb-2">{weight}</p>
          </div>
          <div className="cart-item-rating mb-2 d-flex align-items-center">
            <span className={`rating-badge cartItem-rating-badge ${badgeClass}`}>
              {rating}
              <i className="fa-solid fa-star star-icon"></i>
            </span>
            <span className="rating-count cartItem-rating-count">({rating_count})</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-2 text-success fw-bold">₹{price}</span>
            <span className="text-muted text-decoration-line-through me-2">₹{originalPrice}</span>
            <span className="text-danger">{discount} Off</span>
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="col-3 col-md-3 d-flex align-items-center justify-content-end">
          <button className="btn btn-outline-secondary btn-sm" onClick={onDecrease}>-</button>
          <span className="mx-2">{quantity}</span>
          <button className="btn btn-outline-secondary btn-sm" onClick={onIncrease}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;