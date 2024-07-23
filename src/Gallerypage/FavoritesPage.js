import React, { useEffect, useState } from 'react';
import '../Styles/FavoritesPage.css';

const FavoritesPage = ({ favorites, setFavorites }) => {
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    calculateTotalSum();
  }, [favorites]);

  const calculateTotalSum = () => {
    // Конвертируем цену в число, удаляя символы валюты и пробелы
    const sum = favorites.reduce((acc, item) => 
      acc + parseFloat(item.price.replace('₸', '').replace(' ', '')), 0
    );
    setTotalSum(sum);
  };

  const removeFromFavorites = (productId) => {
    // Удаляем товар из избранного по уникальному идентификатору
    const updatedFavorites = favorites.filter((item) => item.id !== productId);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="favorites-page">
      <h2>Избранное</h2>
      <div className="favorites-list">
        {favorites.map((item) => (
          <div key={item.id} className="favorite-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name} - {item.price}</p>
            <button 
              className="delete-button" 
              onClick={() => removeFromFavorites(item.id)}
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
        <button className="order-button">Оформить заказ</button>
      </div>
    </div>
  );
};

export default FavoritesPage;
