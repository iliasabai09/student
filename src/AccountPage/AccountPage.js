import React from 'react';
import '../Styles/AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-us-wrapper">
            <div className="container">
                <h1 className="title">About Us</h1>
                <div className="section">
                    <p>
                        Welcome to the exciting world of Beauty Store! We believe that beauty should have no boundaries, so we provide access to an endless variety of cosmetic products for everyone.
                    </p>
                    <p>
                        The Beauty Store online shop is one of the largest online stores in Kazakhstan. Today, Beauty Store is about favorite cosmetics, conveniently located stores, and attractive prices. The trust of thousands of customers and beauty available to everyone is the result of our hard work. Beauty Store's network of stores features products from the most popular brands: over 18,000 items to suit every taste. Cosmetics that are loved and sought after, as Beauty Store's collection continuously grows – because there is never too much beauty!
                    </p>
                </div>
                <div className="section">
                    <h2 className="subtitle">Our Contact Information</h2>
                    <div className="contact-info">
                        <div className="contact-item">
                            <span>Our store is located in Almaty, Tole Bi Street.</span>
                        </div>
                        <div className="contact-item">
                            <span>
                                <strong>Working Hours:</strong><br />
                                Mon-Sat, 10:00 AM - 9:00 PM
                            </span>
                        </div>
                        <div className="contact-item">
                            <span>
                                <strong>Phone:</strong><br />
                                +7 775 075 25 50<br />
                                +7 702 049 25 00
                            </span>
                        </div>
                        <div className="contact-item">
                            <span>
                                <strong>E-mail:</strong> invitation@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
