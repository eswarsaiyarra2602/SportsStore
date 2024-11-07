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
    <div className="container-fluid border-bottom py-3 mx-5">
      <div className="row align-items-center">
        <div className="col-3 col-md-2">
          <img src={imageUrl} alt={title} className="img-fluid rounded" />
        </div>
        <div className="col-6 col-md-8">
          <h5 className="fw-bold">{title}</h5>
          <p className="text-muted mb-1">{weight}</p>
          <div className="item-rating mb-2">
            <span className={`rating-badge ${badgeClass}`}>
              {rating}
              <i className="fa-solid fa-star star-icon"></i>
            </span>
            <span className="rating-count">({rating_count})</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-2 text-success fw-bold">₹{price}</span>
            <span className="text-muted text-decoration-line-through me-2">₹{originalPrice}</span>
            <span className="text-danger">{discount} Off</span>
          </div>
        </div>
        <div className="col-3 col-md-2 d-flex align-items-center justify-content-end">
          <button className="btn btn-outline-secondary btn-sm" onClick={onDecrease}>-</button>
          <span className="mx-2">{quantity}</span>
          <button className="btn btn-outline-secondary btn-sm" onClick={onIncrease}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;