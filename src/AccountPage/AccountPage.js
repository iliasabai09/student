import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../Styles/AccountPage.css';

const AccountPage = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId');

      if (!userId) {
        navigate('/login');
        return;
      }

      try {
        console.log('Fetching user data with userId:', userId);
        const response = await axios.get('http://localhost:5002/user', {
          headers: { 'x-user-id': userId }
        });
        console.log('User data response:', response.data);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error.response ? error.response.data : error.message);
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Account Page</h1>
      <p>Welcome, {userData.username}!</p>
    </div>
  );
};

export default AccountPage;
