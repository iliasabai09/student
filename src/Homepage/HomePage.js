import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import '../Styles/HomePage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { topProducts } from './products';

const HomePage = () => {
  const [reviews, setReviews] = useState([
    { name: 'Alice', comment: 'Great products!' },
    { name: 'Dasha', comment: 'Excellent quality and fast delivery.' }
  ]);
  const [newReview, setNewReview] = useState({ name: '', comment: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', comment: '' });
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
    autoplaySpeed: 3000,
  };

  return (
    <div className="homepage">
      <div className="info-section">
        <div className="info-image">
          <img src="https://i.pinimg.com/564x/6d/d4/46/6dd446f220e826487d25797a82cf0e94.jpg" alt="Cosmetics for Women" />
        </div>
        <div className="info-text">
          <div className="green-box">
            <h2>Reveal Your True Beauty!</h2>
            <p>Our exclusive collection of cosmetics for women offers everything needed to create the perfect look. From luxurious skincare to trendy cosmetic products—find what highlights your individuality and natural charm. Treat yourself to the best moments of beauty!</p>
            <button className="info-button">Learn More</button>
          </div>
        </div>
      </div>

      <div className="info-section">
        <div className="info-text">
          <div className="green-box">
            <h2>Be at the Top Every Day!</h2>
            <p>Discover our collection of cosmetics made specifically for modern men. Whether you need skincare, a stylish look, or confidence—everything for your impeccable style is here. Transform with us!</p>
            <button className="info-button">Explore</button>
          </div>
        </div>
        <div className="info-image">
          <img src="https://i.pinimg.com/564x/75/36/58/7536587ec943fd2191da8619cf4f398e.jpg" alt="Cosmetics for Men" />
        </div>
      </div>

      <div className="slider-section">
        <Slider {...sliderSettings}>
          <div className="slide">
            <img src="https://www.monamie.kz/upload/resize_cache/iblock/612/1322_469_19eee6f261393ada4ccf6aacee469d351/6122e0f61337fd642c8d3f34700d6088.jpg" alt="Slide 1" />
          </div>
          <div className="slide">
            <img src="https://www.monamie.kz/upload/resize_cache/iblock/ff0/1322_469_19eee6f261393ada4ccf6aacee469d351/ff0f38a2bdd2670b50eb50de92a2b6f2.jpg" alt="Slide 2" />
          </div>
          <div className="slide">
            <img src="https://www.monamie.kz/upload/resize_cache/iblock/1ff/1322_469_19eee6f261393ada4ccf6aacee469d351/1ffaec804b7b54ffd5d80fd2837a17a8.jpg" alt="Slide 3" />
          </div>
        </Slider>
      </div>

      <div className="products-section">
        <h2>Our Products</h2>
        <div className="products-list">
          {topProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <Link to={`/product/${product.id}`} className="view-details">View Details</Link>
            </div>
          ))}
        </div>
      </div>

      <div className="reviews-section">
        <h2>Customer Reviews</h2>
        <div className="reviews-list">
          {reviews.map((review, index) => (
            <div key={index} className="review">
              <h3>{review.name}</h3>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSubmit}>
          <h3>Leave a Review</h3>
          <div>
            <label htmlFor="name">Name:</label>
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
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              name="comment"
              value={newReview.comment}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Add Review</button>
        </form>
      </div>

      
      </div>
   
  );
};

export default HomePage;
