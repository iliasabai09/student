import React, { useEffect, useState } from 'react';
import '../Styles/CartPage.css';

const CartPage = ({ cart, setCart }) => {
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    calculateTotalSum();
  }, [cart]);

  const calculateTotalSum = () => {
    const sum = cart.reduce((acc, item) => acc + parseFloat(item.price.replace('₸', '').replace(' ', '')), 0);
    setTotalSum(sum);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item, index) => index !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="cart-page">
      <h2>Корзина</h2>
      <div className="cart-list">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name} - {item.price}</p>
            <button className="delete-button" onClick={() => removeFromCart(index)}>✕</button>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h3>Сумма заказа</h3>
        <p>Стоимость продуктов: <span>{totalSum.toLocaleString()} ₸</span></p>
        <p>Итого: <span>{totalSum.toLocaleString()} ₸</span></p>
        <button className="order-button">Оформить заказ</button>
      </div>
    </div>
  );
};

export default CartPage;
