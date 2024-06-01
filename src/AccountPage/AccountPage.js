// AccountPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/AccountPage.css';

const AccountPage = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const navigate = useNavigate();

    useEffect(() => {
        if (!userData) {
            navigate('/login');
        }
    }, [userData, navigate]);

    return (
        <div className="account-page">
            <h2>Аккаунт</h2>
            {userData && (
                <>
                    <p><strong>Добро пожаловать, {userData.name}!</strong></p>
                    <p><strong>Почта:</strong> {userData.email}</p>
                </>
            )}
        </div>
    );
};

export default AccountPage;
