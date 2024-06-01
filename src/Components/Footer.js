import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-column">
        <h4>КОМПАНИЯ</h4>
        <Link to="/about" className="footer-link">О компании</Link>
        <Link to="/stores" className="footer-link">Адреса магазинов</Link>
        <Link to="/reviews" className="footer-link">Отзывы</Link>
        <Link to="/contact" className="footer-link">Контакты</Link>
      </div>
      <div className="footer-column">
        <h4>ПОКУПАТЕЛЯМ</h4>
        <Link to="/delivery" className="footer-link">Доставка и оплата</Link>
        <Link to="/gift-certificates" className="footer-link">Подарочные сертификаты</Link>
        <Link to="/discount-club" className="footer-link">Дисконтный клуб</Link>
        <Link to="/promotions" className="footer-link">Акции</Link>
      </div>
      <div className="footer-column">
        <h4>ИНФОРМАЦИЯ</h4>
        <Link to="/brands" className="footer-link">Бренды</Link>
        <Link to="/info" className="footer-link">Полезная информация</Link>
        <Link to="/faq" className="footer-link">FAQ</Link>
        <Link to="/sitemap" className="footer-link">Карта сайта</Link>
      </div>
      <div className="footer-column">
        <h4>КАТАЛОГ</h4>
        <Link to="/catalog/perfume" className="footer-link">Парфюмерия</Link>
        <Link to="/catalog/makeup" className="footer-link">Макияж</Link>
        <Link to="/catalog/men" className="footer-link">Мужчинам</Link>
        <Link to="/catalog/skin-care" className="footer-link">Уход за кожей</Link>
        <Link to="/catalog/hair" className="footer-link">Волосы</Link>
      </div>
    </div>
    <p className="footer">© 2024 Beauty Store. All rights reserved.</p>
  </footer>
);

export default Footer;