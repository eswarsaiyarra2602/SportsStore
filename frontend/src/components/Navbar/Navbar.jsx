import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({openLoginModal}) {
  return (
    <section id="navbar">
      <nav className="navbar navbar-expand-md">
        <Link className="navbar-brand" to="/">Victory Vault</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="search-container"> {/* Wrapper for search input and icon */}
            <input type="text" placeholder="Search for products, brands and more"/>
            < i className="fa-solid fa-magnifying-glass search-icon"></i>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item position-relative">
              <Link className='nav-link' to="/orders">
                <i className="fa-solid fa-right-left"></i> Orders & Returns
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link className='nav-link' to="/wishlist">
                  <i className="fa-solid fa-heart"></i>
                  <span className="badge">5</span> {/* Counter badge */}
                  Wishlist
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link" to="/cart">
                  <i className="fa-solid fa-shopping-cart"></i>
                  <span className="badge">3</span> {/* Counter badge */}
                  Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/login">
                  <i className="fa-solid fa-user"></i> Login          
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;