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
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/gallery">Продукты</Link></li>
          <li><Link to="/delivery">Доставка и оплата</Link></li>
          {isAuthenticated ? (
            <>
              <li><Link to="/account">Аккаунт</Link></li>
              <li><button className="logout-button" onClick={handleLogout}>Выход</button></li>
            </>
          ) : (
            <li><Link to="/login">Вход</Link></li>
          )}
        </ul>
      </nav>
      <div className="icons">
        <Link to="/favorites">❤️</Link>
        <Link to="/cart">🛒</Link>
      </div>
    </header>
  );
};

export default Header;


