import React, { useContext, useState } from 'react';
import CartItem from '../components/CartItem/CartItem';
import CartPriceDetails from '../components/CartPriceDetails/CartPriceDetails';
import { ShopContext } from '../context/ShopContext';
import { UserContext } from '../context/UserContext';
import Navbar from '../components/Navbar/Navbar';
import './CSS/Cart.css';

export const Cart = () => {
    const { user } = useContext(UserContext);
    const { all_products } = useContext(ShopContext);

    const [quantities, setQuantities] = useState(
        user.cart.reduce((acc, item) => {
            acc[item.productId] = item.quantity;
            return acc;
        }, {})
    );

    const updateQuantity = (productId, newQuantity) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: newQuantity,
        }));
    };

    const cartItems = user.cart.map(cartItem => {
        const product = all_products.find(p => p.productId === cartItem.productId);
        return product ? { ...product, quantity: quantities[cartItem.productId] } : null;
    }).filter(item => item);

    return (
        <>
            <Navbar/>
                <div className="container-fluid mb-5" style={{marginTop:'75px'}}>
                <div className="row cart-row">
                    {/* Left Side: Cart Items */}
                    <div className="col-md-6 cart-items-container">
                        <div className="heading mx-5 mb-2">
                            <h2 className="fw-bold">Shopping Cart</h2>
                            <hr className="mt-2" />
                        </div>
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <CartItem
                                    key={item.productId}
                                    productId={item.productId}
                                    imageUrl={item.imageUrls[0]}
                                    title={item.title}
                                    weight={item.weight}
                                    price={item.new_price}
                                    originalPrice={item.old_price}
                                    discount={item.old_price - item.new_price}
                                    quantity={quantities[item.productId]}
                                    rating={item.rating}
                                    rating_count={item.rating_count}
                                    onDecrease={() => updateQuantity(item.productId, Math.max(1, quantities[item.productId] - 1))}
                                    onIncrease={() => updateQuantity(item.productId, quantities[item.productId] + 1)}
                                />
                            ))
                        ) : (
                            <p>Your cart is empty.</p>
                        )}
                    </div>

                    {/* Right Side: Price Details */}
                    <div className="col-md-4 cart-price-details-container">
                        <CartPriceDetails
                            itemsCount={cartItems.length}
                            mrp={cartItems.reduce((total, item) => total + item.new_price * quantities[item.productId], 0)}
                            discount={cartItems.reduce((total, item) => total + (item.old_price - item.new_price) * quantities[item.productId], 0)}
                            deliveryFee={40} // Adjust as needed
                            totalAmount={cartItems.reduce((total, item) => total + item.new_price * quantities[item.productId], 0)}
                            savings={cartItems.reduce((total, item) => total + (item.old_price - item.new_price) * quantities[item.productId], 0)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};