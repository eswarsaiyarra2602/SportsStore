import React, { useEffect } from 'react';
import './TextSlide.css';

export const TextSlide = () => {
  useEffect(() => {
    // This ensures the carousel starts automatically without manual interaction.
    const carousel = document.querySelector('#carouselExampleSlidesOnly');
    if (carousel) {
      new window.bootstrap.Carousel(carousel, {
        interval: 3000,
        ride: 'carousel',
      });
    }
  }, []);

  return (
    <div className="text-slide-top">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-block w-100 text-center">
              SUMMER SALE IS NOW LIVE
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-100 text-center">
              FREE DELIVERY ON ORDERS ABOVE ₹500
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-100 text-center">
              AVAIL 10% OFF ON FIRST ORDER
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};