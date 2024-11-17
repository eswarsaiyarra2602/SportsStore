import React from "react";
import "./OrderCard.css";

export const OrderCard = ({ image, productName, price, orderStatus, deliveryDate, address }) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case "Delivered":
        return { color: "green", text: `Delivered On ${deliveryDate}` };
      case "In Process":
        return { color: "orange", text: "In Process" };
      case "Dispatched":
        return { color: "orange", text: "Dispatched" };
      case "Cancelled":
        return { color: "red", text: "Order Cancelled" };
      case "Returned":
        return { color: "red", text: "Order Cancelled" };
      default:
        return { color: "grey", text: "Unknown Status" };
    }
  };

  const { color, text } = getStatusStyles(orderStatus);

  return (
    <div className="order-card container-fluid shadow-sm rounded p-3 mb-4">
      <div className="row align-items-center">
        {/* Product Image */}
        <div className="col-md-3 text-center">
          <img
            src={image}
            alt={productName}
            className="img-fluid order-card-image rounded"
          />
        </div>

        {/* Product Details */}
        <div className="col-md-6 text-center text-md-left">
          <h5 className="mb-1">{productName}</h5>
          <p className="text-muted mb-2">
            Price: <strong>₹{price}</strong>
          </p>
          <p className="text-muted order-address-text mb-0">
            Address: <span className="order-address-content">{address}</span>
          </p>
        </div>

        {/* Order Status */}
        <div className="col-md-3 text-center text-md-right">
          <div className="order-status">
            <span
              className="status-dot"
              style={{ backgroundColor: color }}
            ></span>
            <span className="status-text">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};