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
import ProductCard from './Gallerypage/ProductCard';
import DeliveryPage from './DeliveryPaymentPage/DeliveryPaymentPage';
import AdminPanel from './Components/AdminPanel';
import CheckoutPage from './Gallerypage/CheckoutPage'; // Импортируйте компонент CheckoutPage
import OrdersPage from './Gallerypage/OrdersPage';

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addToFavorites = (product) => {
    setFavorites([...favorites, product]);
  };

  const totalSum = cart.reduce((acc, item) =>
    acc + parseFloat(item.price.replace('₸', '').replace(' ', '')), 0
  );

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage addToCart={addToCart} addToFavorites={addToFavorites} />} />
            <Route path="/product/:id" element={<ProductCard addToCart={addToCart} addToFavorites={addToFavorites} />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/favorites" element={<FavoritesPage favorites={favorites} setFavorites={setFavorites} />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
            <Route path="/checkout" element={<CheckoutPage cart={cart} totalSum={totalSum} />} /> {/* Добавьте маршрут для CheckoutPage */}
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/admin/panel" element={<AdminPanel />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
