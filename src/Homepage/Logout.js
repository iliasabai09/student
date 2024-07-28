import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      window.location.href = '/login'; 
    } catch (error) {
      console.error('Error during logout:', error); 
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
