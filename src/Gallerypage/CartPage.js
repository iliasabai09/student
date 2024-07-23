import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируйте useNavigate
import '../Styles/CartPage.css';

const CartPage = ({ cart, setCart }) => {
  const [totalSum, setTotalSum] = useState(0);
  const navigate = useNavigate(); // Инициализируйте useNavigate

  useEffect(() => {
    calculateTotalSum();
  }, [cart]);

  const calculateTotalSum = () => {
    const sum = cart.reduce((acc, item) => 
      acc + parseFloat(item.price.replace('₸', '').replace(' ', '')), 0
    );
    setTotalSum(sum);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    navigate('/checkout'); // Используйте navigate для перехода
  };

  return (
    <div className="cart-page">
      <h2>Корзина</h2>
      <div className="cart-list">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name} - {item.price}</p>
            <button 
              className="delete-button" 
              onClick={() => removeFromCart(item.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h3>Сумма заказа</h3>
        <p>Стоимость продуктов: <span>{totalSum.toLocaleString()} ₸</span></p>
        <p>Итого: <span>{totalSum.toLocaleString()} ₸</span></p>
        <button className="order-button" onClick={handleCheckout}>Оформить заказ</button>
      </div>
    </div>
  );
};

export default CartPage;
