import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      window.location.href = '/login'; // Перенаправление на страницу входа
    } catch (error) {
      console.error('Error during logout:', error); // Логирование ошибки
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
