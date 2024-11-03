import React from 'react';
import CartItem from '../components/CartItem/CartItem';
import CartPriceDetails from '../components/CartPriceDetails/CartPriceDetails';
import './CSS/Cart.css'
export const Cart = () => {
  return (
    <div className="container-fluid my-4">
      <div className="row">
        {/* Left Side: Cart Items */}
        <div className="col-md-6">
          <div className="heading mx-5 mb-2">
            <h2 className="fw-bold">Shopping Cart</h2>
            <hr className="mt-2"/>
          </div>
          <CartItem
            imageUrl="https://rukminim2.flixcart.com/image/120/120/xif0q/rice/9/4/k/-original-imah3h5yqzhpfnch.jpeg?q=90"
            title="INDIA GATE Mini Mogra Basmati Rice"
            weight="5 kg"
            price="310"
            originalPrice="345"
            discount="₹35"
          />
          <CartItem
            imageUrl="https://rukminim2.flixcart.com/image/120/120/xif0q/rice/9/4/k/-original-imah3h5yqzhpfnch.jpeg?q=90"
            title="INDIA GATE Mini Mogra Basmati Rice"
            weight="5 kg"
            price="310"
            originalPrice="345"
            discount="₹35"
          />
          {/* Add more CartItem components here if needed */}
        </div>

        {/* Right Side: Price Details */}
        <div className="col-md-4">
          <CartPriceDetails
            itemsCount={2}
            mrp={2745}
            discount={1279}
            deliveryFee={9}
            totalAmount={1475}
            savings={1279}
          />
        </div>
      </div>
    </div>
  );
};