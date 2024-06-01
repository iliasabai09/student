import React from 'react';
import '../Styles/AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-us-wrapper">
            <div className="container">
                <h1 className="title">О нас</h1>
                <div className="section">
                    <p>
                        Приветствуем в захватывающем мире Beauty Store! Мы уверены, для красоты не должно быть границ и преград, поэтому обеспечиваем доступ к нескончаемому разнообразию косметических продуктов для всех.
                    </p>
                    <p>
                        Онлайн-магазин Beauty Store – одна из крупнейших онлайн-магазинов в Казахстане. Сегодня Beauty Store – это любимая косметика, магазины в шаговой доступности и выгодные цены. Доверие тысяч покупателей и красота, доступная всем – результат нашей упорной работы. В сети магазинов Beauty Store представлена продукция самых популярных брендов: более 18 000 товарных позиций на любой вкус. Косметика, которую любят и за которой возвращаются в Beauty Store снова и снова, ведь красоты много не бывает!
                    </p>
                </div>
                <div className="section">
                    <h2 className="subtitle">Наши контакты</h2>
                    <div className="contact-info">
                        <div className="contact-item">
                            <span className="icon">&#128197;</span>
                            <span>Наш магазин расположен в г. Алматы, на ул. Толе би.</span>
                        </div>
                        <div className="contact-item">
                            <span className="icon">&#8986;</span>
                            <span>
                                <strong>График работы:</strong><br />
                                Пн-Сб, с 10:00 до 21:00.
                            </span>
                        </div>
                        <div className="contact-item">
                            <span className="icon">&#9742;</span>
                            <span>
                                <strong>Телефон:</strong><br />
                                +7 775 075 25 50<br />
                                +7 702 049 25 00
                            </span>
                        </div>
                        <div className="contact-item">
                            <span className="icon">&#9993;</span>
                            <span>
                                <strong>E-mail:</strong> beautystore@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
