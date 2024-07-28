import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-column">
        <h4>COMPANY</h4>
        <Link to="/about" className="footer-link">About Us</Link>
        <Link to="/stores" className="footer-link">Store Locations</Link>
        <Link to="/reviews" className="footer-link">Reviews</Link>
        <Link to="/contact" className="footer-link">Contact Us</Link>
      </div>
      <div className="footer-column">
        <h4>SHOPPER</h4>
        <Link to="/delivery" className="footer-link">Delivery & Payment</Link>
        <Link to="/gift-certificates" className="footer-link">Gift Certificates</Link>
        <Link to="/discount-club" className="footer-link">Discount Club</Link>
        <Link to="/promotions" className="footer-link">Promotions</Link>
      </div>
      <div className="footer-column">
        <h4>INFORMATION</h4>
        <Link to="/brands" className="footer-link">Brands</Link>
        <Link to="/info" className="footer-link">Useful Information</Link>
        <Link to="/faq" className="footer-link">FAQ</Link>
        <Link to="/sitemap" className="footer-link">Sitemap</Link>
      </div>
      <div className="footer-column">
        <h4>CATALOG</h4>
        <Link to="/catalog/perfume" className="footer-link">Perfume</Link>
        <Link to="/catalog/makeup" className="footer-link">Makeup</Link>
        <Link to="/catalog/men" className="footer-link">For Men</Link>
        <Link to="/catalog/skin-care" className="footer-link">Skin Care</Link>
        <Link to="/catalog/hair" className="footer-link">Hair</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
