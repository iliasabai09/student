import React, { useEffect, useState } from 'react';
import '../Styles/FavoritesPage.css';

const FavoritesPage = ({ favorites, setFavorites }) => {
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    calculateTotalSum();
  }, [favorites]);

  const calculateTotalSum = () => {
    const sum = favorites.reduce((acc, item) => acc + parseFloat(item.price.replace('₸', '').replace(' ', '')), 0);
    setTotalSum(sum);
  };

  const removeFromFavorites = (productId) => {
    const updatedFavorites = favorites.filter((item, index) => index !== productId);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="favorites-page">
      <h2>Избранное</h2>
      <div className="favorites-list">
        {favorites.map((item, index) => (
          <div key={index} className="favorite-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name} - {item.price}</p>
            <button className="delete-button" onClick={() => removeFromFavorites(index)}>✕</button>
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

export default FavoritesPage;
