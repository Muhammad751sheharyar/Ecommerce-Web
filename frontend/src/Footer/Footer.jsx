import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section 1: Brand Info */}
        <div className="footer-section">
          <h2 className="footer-logo">🛒 ShopEase</h2>
          <p>Your one-stop destination for the latest tech, fashion, and lifestyle gadgets. We deliver quality at your doorstep.</p>
          <div className="social-icons">
            <span>🔵</span> <span>📸</span> <span>🐦</span> <span>📺</span>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/orders">My Orders</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Section 3: Customer Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/shipping">Shipping Policy</Link></li>
            <li><Link to="/returns">Returns & Exchange</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </div>

        {/* Section 4: Contact Details */}
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p>📍 123 Tech Street, Karachi, Pakistan</p>
          <p>📧 support@shopease.com</p>
          <p>📞 +92 300 1234567</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 ShopEase. All Rights Reserved. | Built with ❤️ by Gemini</p>
      </div>
    </footer>
  );
}

export default Footer;