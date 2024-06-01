import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Homepage/HomePage';
import AboutPage from './Aboutpage/AboutPage';
import GalleryPage from './Gallerypage/GalleryPage';
import LoginForm from './Homepage/LoginForm';
import RegisterForm from './Homepage/RegisterForm';
import FavoritesPage from './Gallerypage/FavoritesPage';
import CartPage from './Gallerypage/CartPage';
import AccountPage from './AccountPage/AccountPage';
import './Styles/App.css';
import ProductCard from './Gallerypage/ProductCard';
import DeliveryPage from './DeliveryPaymentPage/DeliveryPaymentPage';
import { topProducts } from './Homepage/products';

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addToFavorites = (product) => {
    setFavorites([...favorites, product]);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage topProducts={topProducts} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage addToCart={addToCart} addToFavorites={addToFavorites} />} />
            <Route path="/product/:id" element={<ProductCard addToCart={addToCart} addToFavorites={addToFavorites} />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/favorites" element={<FavoritesPage favorites={favorites} setFavorites={setFavorites} />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
            <Route path="/delivery" element={<DeliveryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

