import React , {useEffect }from'react';
import './ImageCarousel.css';

export const ImageCarousel = () => {
  useEffect(() => {
    const carousel = document.querySelector('#imageCarousel');
    if (carousel) {
      new window.bootstrap.Carousel(carousel, {
        interval: 5000,
        ride: 'carousel',
      });
    }
  }, []);

  return (
    <section id="carousel">
      <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="/assets/imageCarousel/image1.webp" alt="image1" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="/assets/imageCarousel/image2.jpg" alt="image2" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};