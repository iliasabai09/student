// OrdersPage.js
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../Styles/OrdersPage.css';

const OrdersPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5002/orders')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    return (
        <div>
            <h1>Заказы</h1>
            <div className="containerOrders">
                <div className="table">
                    <div className="table-header">
                        <div className="header__item"><a id="name" className="filter__link" href="#">Город</a></div>
                        <div className="header__item"><a id="wins" className="filter__link filter__link--number"
                                                         href="#">Адрес</a></div>
                        <div className="header__item"><a id="draws" className="filter__link filter__link--number"
                                                         href="#">Тип оплаты</a></div>
                        <div className="header__item"><a id="losses" className="filter__link filter__link--number"
                                                         href="#">Номер карты</a></div>
                        <div className="header__item"><a id="total" className="filter__link filter__link--number"
                                                         href="#">Статус</a></div>
                    </div>
                    <div className="table-content">
                        {products.map((product, idx) => (
                            <div className="table-row">
                                <div className="table-data">{product.city}</div>
                                <div className="table-data">{product.address}</div>
                                <div className="table-data">{product.payType}</div>
                                <div className="table-data">{product.cardNumber}</div>
                                <div className="table-data">{product.status}</div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersPage;
