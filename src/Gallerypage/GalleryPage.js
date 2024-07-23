import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import '../Styles/Gallerypage.css';
import SearchBar from './SearchBar';
import Resizer from 'react-image-file-resizer';

Modal.setAppElement('#root');

const GalleryPage = ({ addToCart, addToFavorites }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });

  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState({
    username: '',
    password: ''
  });

  const [adminMessage, setAdminMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigate = useNavigate();

  const openAdminModal = () => {
    setIsAdminModalOpen(true);
  };

  const closeAdminModal = () => {
    setIsAdminModalOpen(false);
  };

  const handleUsernameChange = (e) => {
    setAdminCredentials({ ...adminCredentials, username: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setAdminCredentials({ ...adminCredentials, password: e.target.value });
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminCredentials.username === '8888' && adminCredentials.password === '0000') {
      setIsAdmin(true);
      setIsAdminModalOpen(false); // Close login modal if authentication is successful
      setAdminMessage('Отлично! Вы вошли как администратор.');
    } else {
      alert('Неверный логин или пароль');
    }
  };

  const openAddProductModal = () => {
    setModalIsOpen(true);
  };

  const closeAddProductModal = () => {
    setModalIsOpen(false);
    setNewProduct({
      name: '',
      price: '',
      description: '',
      image: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      Resizer.imageFileResizer(
        file,
        200,
        200,
        'JPEG',
        100,
        0,
        uri => {
          setNewProduct(prevState => ({
            ...prevState,
            image: uri
          }));
        },
        'base64'
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts(prevProducts => [...prevProducts, { id: products.length + 1, ...newProduct }]);
    closeAddProductModal();
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="gallery-page">
      <h2>Каталог товаров и продуктов</h2>
      <SearchBar placeholder="Поиск по каталогу" handleSearch={handleSearch} />
      <div className="products-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className="product-card-buttons">
              <Link to={`/product/${product.id}`} className="view-details-2">Подробнее</Link>
              <button className="cart-button" onClick={() => addToCart(product)}>🛒</button>
              <button className="like-button" onClick={() => addToFavorites(product)}>❤️</button>
              {isAdmin && (
                <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>Удалить</button>
              )}
            </div>
          </div>
        ))}
      </div>

      {!isAdmin && (
        <button onClick={openAdminModal} className="admin-button">Для админов</button>
      )}

      <Modal
        isOpen={isAdminModalOpen}
        onRequestClose={closeAdminModal}
        contentLabel="Вход для администратора"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Вход для администратора</h2>
        <form onSubmit={handleAdminLogin}>
          <label>
            Логин:
            <input type="text" value={adminCredentials.username} onChange={handleUsernameChange} />
          </label>
          <label>
            Пароль:
            <input type="password" value={adminCredentials.password} onChange={handlePasswordChange} />
          </label>
          <button type="submit">Войти</button>
        </form>
      </Modal>

      {isAdmin && (
        <div>
          <p>{adminMessage}</p>
          <button onClick={openAddProductModal} className="add-product-button">Добавить</button>
        </div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeAddProductModal}
        contentLabel="Добавить новый товар"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Добавить новый товар</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Название:
            <input type="text" name="name" value={newProduct.name} onChange={handleChange} required />
          </label>
          <label>
            Описание:
            <textarea name="description" value={newProduct.description} onChange={handleChange} required />
          </label>
          <label>
            Цена:
            <input type="text" name="price" value={newProduct.price} onChange={handleChange} required />
          </label>
          <label>
            Фото:
            <input type="file" accept="image/*" onChange={handleImageChange} required />
          </label>
          <button type="submit">Добавить</button>
          <button type="button" onClick={closeAddProductModal}>Отмена</button>
        </form>
      </Modal>
    </div>
  );
};

export default GalleryPage;
