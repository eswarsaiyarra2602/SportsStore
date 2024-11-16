import React from 'react';
import './WishListItem.css';
import { Link } from 'react-router-dom';

export const WishListItem = ({ 
  productId, 
  imageUrl, 
  title, 
  weight, 
  price, 
  originalPrice, 
  discount, 
  rating, 
  rating_count, 
  onRemove 
}) => {
  let badgeClass = '';
  if (rating > 3.5) {
    badgeClass = 'green-badge';
  } else if (rating >= 3 && rating <= 3.5) {
    badgeClass = 'yellow-badge';
  } else {
    badgeClass = 'red-badge';
  }

  return (
            <div className="wishlist-item">
            <button className="wishlist-remove-btn" onClick={onRemove}>
                <i className="fa-solid fa-xmark"></i>
            </button>
            <Link to={`/product/${productId}`}>
                <div className="wishlist-item-image-container">
                <img src={imageUrl} alt={title} />
                </div>
            </Link>
            <div className="wishlist-item-details">
                <p className="wishlist-item-name">{title}</p>

                <div className="wishlist-item-rating">
                <span className={`rating-badge ${badgeClass}`}>
                    {rating}
                    <i className="fa-solid fa-star star-icon"></i>
                </span>
                <span className="rating-count">({rating_count})</span>
                </div>

                <div className="wishlist-item-prices">
                <div className="wishlist-item-prices-new">₹{price}</div>
                <div className="wishlist-item-prices-old">₹{originalPrice}</div>
                </div>
            </div>
        </div> 
  );
};

