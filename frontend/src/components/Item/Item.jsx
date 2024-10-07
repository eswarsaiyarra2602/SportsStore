import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = (props) => {
  let badgeClass = '';
  if (props.rating > 3.5) {
    badgeClass = 'green-badge';
  } else if (props.rating >= 3 && props.rating <= 3.5) {
    badgeClass = 'yellow-badge';
  } else {
    badgeClass = 'red-badge';
  }

  return (
    <div className='item'>
      <Link to={`/product/${props.product_id}`}>
        <div className='item-image-container'>
          <img src={props.image} alt={props.name} />
        </div>
      </Link>
      <div className='item-details'>
        <p className='item-name'>{props.name}</p>

        {/* Rating Section */}
        <div className="item-rating">
          <span className={`rating-badge ${badgeClass}`}>
            {props.rating}
            <i className="fa-solid fa-star star-icon"></i>
          </span>
          <span className="rating-count">({props.rating_count})</span>
        </div>

        <div className='item-prices'>
          <div className='item-prices-new'>₹{props.new_price}</div>
          <div className='item-prices-old'>₹{props.old_price}</div>
        </div>
      </div>
    </div>
  );
};