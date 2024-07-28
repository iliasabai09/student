// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import logo from '../images/logo.png';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Beauty Store Logo" className="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/gallery">Products</Link></li>
          <li><Link to="/delivery">Delivery & Payment</Link></li>
          <li><Link to="/orders">Orders</Link></li> 
          {isAuthenticated ? (
            <>
              <li><Link to="/account">Account</Link></li>
              <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
      <div className="icons">
        <Link to="/favorites" className="heart-icon">❤️</Link>
        <Link to="/cart">🛒</Link>
      </div>
    </header>
  );
};

export default Header;
