import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5002/api/products', {
        name,
        quantity,
        price,
      });

      const addedProduct = response.data;
      setProducts([...products, addedProduct]);
      setName('');
      setQuantity('');
      setPrice('');
      setMessage('Продукт успешно добавлен');
    } catch (err) {
      console.error('Error adding product:', err);
      setMessage('Ошибка при добавлении продукта. Попробуйте снова.');

      // Добавление продукта в локальное состояние даже при ошибке
      const tempProduct = { name, quantity, price };
      setProducts([...products, tempProduct]);
    }
  };

  return (
    <div>
      <h2>Добавить новый продукт</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Имя продукта:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Количество:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Цена:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Добавить продукт</button>
      </form>
      {message && <p>{message}</p>}
      <h3>Список продуктов</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - Количество: {product.quantity} - Цена: {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddProduct;
