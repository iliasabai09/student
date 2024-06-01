import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/HomePage.css'; 

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.email === email && userData.password === password) {
      localStorage.setItem('currentUser', JSON.stringify({ email }));
      onLogin && onLogin(userData.name);
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <h2 className="login-page-text">Вход</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Пароль:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Вход</button>
      </form>
      <p className="register-link">Еще нет аккаунта? <Link to="/register">Регистрация</Link></p>
    </div>
  );
};

export default LoginForm;