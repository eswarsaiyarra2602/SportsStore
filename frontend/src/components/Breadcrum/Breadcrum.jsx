import React from 'react';
import './Breadcrum.css';

export const Breadcrum = (props) => {
  const { product } = props;

  if (!product) {
    return <div>Loading...</div>; // Or any fallback message you want to display
  }

  return (
    <div>
      Home <i className="fa-solid fa-greater-than"></i> SHOP
      <i className="fa-solid fa-greater-than"></i> {product.category}
      <i className="fa-solid fa-greater-than"></i> {product.name}
    </div>
  );
};