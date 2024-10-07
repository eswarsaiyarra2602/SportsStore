import React from 'react';
import './Footer.css'; // External CSS

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Mail Us</h4>
          <p>Address:</p>
          <p>34-10-6, Gandhinagar,</p>
          <p>Mandapeta, India - 533308</p>
          <p>Email: <a href="mailto:yarraeswarsai@gmail.com">yarraeswarsai@gmail.com</a></p>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 VictorySports. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
