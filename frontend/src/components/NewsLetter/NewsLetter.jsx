import React from 'react';
import './NewsLetter.css'; // Optional if you need very minimal custom styles

export const NewsLetter = () => {
  return (
    <div className="container my-5">
      <div className="newsletter bg-primary text-white text-center p-5 rounded w-75  w-md-80 mx-auto">
        <h1 className="fw-bold mb-3">Get Exclusive Offers On Your Email</h1>
        <p className="mb-4">Subscribe to our newsletter and stay updated</p>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 bg-white text-dark rounded p-2">
          <input
            type="email"
            className="form-control border-0 flex-grow-1"
            placeholder="Your Email Address"
          />
          <button className="btn btn-dark px-4 py-2 fw-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};