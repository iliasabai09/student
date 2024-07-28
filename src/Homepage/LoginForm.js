import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../Styles/HomePage.css';

const LoginForm = ({onLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log('Login request data:', {username, password}); 

      const response = await axios.post('http://localhost:5002/login', {
        username,
        password,
      });

            console.log('Login response:', response.data); 

           
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.userId);

          
            onLogin && onLogin(username);

            
            goToAdminPanel();
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : error.message); 
            alert('Invalid username or password');
        }
    };
    const goToAdminPanel = () => {
        navigate('/account'); 
    };
    return (
        <div className="login-page">
            <h2 className="login-page-text">Вход</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Пароль:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
          />
        </div>
        <button type="submit">Вход</button>
      </form>
      <p className="register-link">
        Еще нет аккаунта? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginForm;
