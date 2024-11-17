import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { OrderCard } from "../components/OrderCard/OrderCard";

export const Orders = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mb-5" style={{marginTop: '75px'}}>
      <div className="wishlist-title text-center fw-bold mb-3" 
            style={{fontSize:'1.8rem'}}>Orders & Returns
      </div>
      <OrderCard
        image="https://rukminim2.flixcart.com/image/612/612/l58iaa80/sport-bag/d/m/9/sunr-2215-m-sunr2215-kit-bag-yonex-36-badminton-original-imagfynzqgczmryv.jpeg?q=70"
        productName="Yonex Sports Bag"
        price="299.99"
        orderStatus="In Process"
        address="456 Blue Avenue, Metropolis, NY 10001, USA"
      />
       <OrderCard
        image="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/z/p/r/-original-imah58q5jpsqkmqn.jpeg?q=70"
        productName="Yonex Shoes"
        price="199.99"
        orderStatus="Delivered"
        deliveryDate="2021-07-01"
        address="123 Green Street, Springfield, IL 62701, USA"
      />
      <OrderCard
        image="https://rukminim2.flixcart.com/image/612/612/ksxjs7k0hlty2aw/bat/a/n/d/mrf5pop89659-5-mrf-original-imag6hgxazgfzrcn.jpeg?q=70"
        productName="MRF Cricket Bat"
        price="49.99"
        orderStatus="Cancelled"
        address="789 Red Road, Gotham City, NJ 07001, USA"
      />
    </div>
    </>
  );
};