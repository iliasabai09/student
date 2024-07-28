import React, {useState} from 'react';
import '../Styles/CheckoutPage.css';
import axios from "axios";

const CheckoutPage = ({ cart, totalSum }) => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('visa');
  const [cardNumber, setCardNumber] = useState('');
  const [paymentTiming, setPaymentTiming] = useState('immediate');
  const [agreement, setAgreement] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  


  const handleOrder = () => {
    if (agreement) {
      const body = {
        country,
        city,
        address,
        payType: paymentMethod,
        cardNumber,
        payTime: paymentTiming
      }
      axios.post('http://localhost:5002/orders', body);
      setOrderSuccess(true);
    } else {
      alert("Пожалуйста, согласитесь с условиями.");
    }
  };

  return orderSuccess ? (
    <div className="order-success">
      <h2>Заказ успешно оформлен!</h2>
      <p>Доставка в пути.</p>
    </div>
  ) : (
    <div className="checkout-page">
      <h2>Оформление заказа</h2>
      <form>
        <label>Страна:
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        </label>
        <label>Город:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <label>Адрес:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>Способ оплаты:
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="visa">Visa</option>
            {/* Добавьте другие способы оплаты при необходимости */}
          </select>
        </label>
        {paymentMethod === 'visa' && (
          <label>Номер карты:
            <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
          </label>
        )}
        <label>Оплата:
          <select value={paymentTiming} onChange={(e) => setPaymentTiming(e.target.value)}>
            <option value="immediate">Сразу</option>
            <option value="onDelivery">При получении</option>
          </select>
        </label>
        <div className="order-summary">
          <h3>Сумма заказа</h3>
          <p>Стоимость продуктов: <span>{totalSum.toLocaleString()} ₸</span></p>
          <p>Итого: <span>{totalSum.toLocaleString()} ₸</span></p>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <p>{item.name} - {item.price}</p>
              </div>
            ))}
          </div>
        </div>
        <label>
          <input type="checkbox" checked={agreement} onChange={() => setAgreement(!agreement)} />
          Я согласен с <a href="/terms">Правилами использования торговой площадки</a> и <a href="/return-policy">правилами возврата</a>
        </label>
        <button type="button" onClick={handleOrder}>Заказать</button>
      </form>
    </div>
  );
};

export default CheckoutPage;