import React from 'react';
import { Link } from 'react-router-dom';
import './SportsCategorySection.css'
// Sample data for the sports categories
const sports = [
  { id: 1, name: 'Badminton', image: 'assets/sports/badminton/badmintonCover.jpg', link: '/badminton-products' },
  { id: 1, name: 'Football', image: 'assets/sports/football/footballCover.jpg', link: 'football-products' },
  { id: 1, name: 'Cricket', image: 'assets/sports/cricket/cricketCover.jpg', link: '#' },
  { id: 1, name: 'Volleyball', image: 'assets/sports/volleyball/volleyballCover.jpg', link: '#' }
  // A#
];

const SportsCategorySection = () => {
  return (
    <section id="shopSection">
      <h2 className="title text-center">SHOP NOW</h2>
      <div className="container-fluid">
      <div className="row">
        {sports.map(sport => (
          <div className="col-lg-3 col-md-6 mb-4" key={sport.id}>
            <div className="card">
              <img src={sport.image} className="card-img-top custom-card-img" alt={sport.name} />
              <div className="card-body">
                <h5 className="card-title">{sport.name}</h5>
                <Link to={sport.link} className="btn btn-primary">SHOP NOW</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default SportsCategorySection;