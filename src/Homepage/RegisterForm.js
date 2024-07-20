import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form:', { username, password });

    try {
      const response = await axios.post('http://localhost:5001/register', {
        username,
        password
      });
      console.log('Response:', response.data);
      setMessage('User registered successfully');
    } catch (err) {
      console.error('Error registering user', err);

      // Проверяем, есть ли err.response и err.response.data
      if (err.response && err.response.data) {
        setMessage(`Error registering user: ${err.response.data}`);
      } else {
        setMessage('Error registering user: Network error or server is not responding');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
