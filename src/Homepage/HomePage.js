import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import '../Styles/HomePage.css';
import LoginForm from './LoginForm';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = ({ topProducts }) => {
  const [reviews, setReviews] = useState([
    { name: 'Алиса', comment: 'Отличные продукты!' },
    { name: 'Даша', comment: 'Отличное качество и быстрая доставка.' }
  ]);
  const [newReview, setNewReview] = useState({ name: '', comment: '' });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (userData) {
        setUser(userData.name);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', comment: '' });
  };

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleButtonClick = () => {
    window.location.reload();
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
  };

  return (
    <div className="homepage">
      <div className="welcome-page">
      <h1>Добро пожаловать!</h1>
      <p>Ваш магазин для всего, что вам нужно для красоты!</p>
      <br></br>
      <Link to="/gallery" className="shop-now">Купить сейчас</Link>
      </div>

      <div className="slider-section">
        <h2>Новинки</h2>
        <Slider {...sliderSettings}>
          <div className="slide">
            <img src="https://www.monamie.kz/upload/resize_cache/iblock/8d8/1322_469_19eee6f261393ada4ccf6aacee469d351/8d8be8fc3bb83cc8231b4853d0badf31.jpg" alt="Slide 1" />
          </div>
          <div className="slide">
            <img src="https://www.monamie.kz/upload/resize_cache/iblock/3c2/1322_469_19eee6f261393ada4ccf6aacee469d351/3c24b632f7e87cbf68ee1608b0e19a69.jpg" alt="Slide 2" />
          </div>
          <div className="slide">
            <img src="https://www.monamie.kz/upload/resize_cache/iblock/31f/1322_469_19eee6f261393ada4ccf6aacee469d351/31fce6f1dc5f7c810808d18669b7bbdd.jpg" alt="Slide 3" />
          </div>
        </Slider>
      </div>

      <div className="products-section">
        <h2>Наши продукты</h2>
        <div className="products-list">
          {topProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <Link to={`/product/${product.id}`} className="view-details">Подробнее</Link>
            </div>
          ))}
        </div>
      </div>

      <div className="reviews-section">
        <h2>Отзывы клиентов</h2>
        <div className="reviews-list">
          {reviews.map((review, index) => (
            <div key={index} className="review">
              <h3>{review.name}</h3>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
        {user ? (
          <form onSubmit={handleSubmit}>
            <h3>Оставить отзыв</h3>
            <div>
              <label htmlFor="name">Имя:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newReview.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="comment">Комментарий:</label>
              <textarea
                id="comment"
                name="comment"
                value={newReview.comment}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Добавить отзыв</button>
          </form>
        ) : (
          <div className="login-prompt">
            <p>Чтобы оставить отзыв, зайдите в свой аккаунт</p>
            <LoginForm onLogin={handleLogin} />
          </div>
        )}
      </div>

      <div className="contact-section">
          <h2>Нужна наша консультация?</h2>
          <p>Оставьте свой адрес электронной почты и мы в скором времени свяжемся с вами!</p>
          <form className="contact-form">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
            <button type="button" onClick={handleButtonClick}>Отправить</button>
          </form>
        </div>
    </div>
  );
};

export default HomePage;