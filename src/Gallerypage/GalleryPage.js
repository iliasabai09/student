import React, { useState} from 'react'; 
import { Link } from 'react-router-dom';
import '../Styles/Gallery.css';
import SearchBar from './SearchBar';

const GalleryPage = ({ addToCart, addToFavorites}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products] = useState([
    { id: 1, name: 'Помада-стик', price: '3 048 ₸', description: 'INFLUENCE BEAUTY influence', image: 'https://pcdn.goldapple.ru/p/p/19000008522/web/696d674d61696e8dad7d552b7407dfullhd.webp' },
    { id: 2, name: 'Тушь для ресниц', price: '5 850 ₸', description: 'DARLING* lash cocoon', image: 'https://pcdn.goldapple.ru/p/p/19000047864/web/696d674d61696e8dc4cb8bde73e4ffullhd.webp' },
    { id: 3, name: 'Тональный крем', price: '7 896 ₸', description: 'ARTDECO perfect teint foundation', image: 'https://pcdn.goldapple.ru/p/p/17354600004/web/696d674d61696e8dbec0b94f12791fullhd.webp' },
    { id: 4, name: 'Подводка для глаз', price: '1 459 ₸', description: 'ESSENCE dip eyeliner', image: 'https://pcdn.goldapple.ru/p/p/19000239307/web/696d674d61696e5f30323533623464666435623834663830613366383233373230633264623463388dc7ca86aa5dae1fullhd.webp' },
    { id: 5, name: 'Румяна', price: '10 020 ₸', description: 'KIKO MILANO unlimited blush', image: 'https://pcdn.goldapple.ru/p/p/19000040535/web/696d674d61696e8dc2d9591fdd7bafullhd.webp' },
    { id: 6, name: 'Консилер', price: '4 390 ₸', description: 'MAYBELLINE NEW YORK the eraser eye', image: 'https://pcdn.goldapple.ru/p/p/3156200011/web/696d674d61696e8dc3d6711667534fullhd.webp' },
    { id: 7, name: 'Гель-лак для ногтей', price: '2 646 ₸', description: 'SOPHIN gel polish color', image: 'https://pcdn.goldapple.ru/p/p/57722100008/web/696d674d61696e8dc4a60950b2b25fullhd.webp' },
    { id: 8, name: 'Туалетная вода', price: '23 100 ₸', description: 'VERSACE eros', image: 'https://pcdn.goldapple.ru/p/p/7430800010/web/696d674d61696e8dbd9320d542a1efullhd.webp', details: 'Уникальная аура, чувственное прикосновение, несокрушимая мужественность - таковы ключевые ноты оды любви, воспеваемой Эросом, страстным и непреклонным соблазнителем. Новый аромат олицетворяет абсолютную мужественность, соединяя в единое целое: искрящуюся ауру яркой, вибрирующей, экстраординарной свежести листьев Мяты, цедры Итальянского Лимона и Зеленого Яблока; захватывающую чувственность интригующий, восточных, обволакивающих нот Бобов Тонка, Амброксана (Амбры), цветов Герани и Ванили; соблазнительную мужественность, воплощенную в древесном шлейфе Атласского и Виргинского Кедра, Ветивера и Дубового мха, привносящих в аромат интенсивный оттенок мощи и власти.' },
    { id: 9, name: 'Увлажняющий крем', price: '25 132 ₸', description: 'CLINIQUE for men anti-age moisturizer', image: 'https://pcdn.goldapple.ru/p/p/15250200038/web/696d674d61696e8dad7106a0a6345fullhd.webp' },
    { id: 10, name: 'Шампунь', price: '3 362 ₸', description: 'LADOR moisture balancing shampoo', image: 'https://pcdn.goldapple.ru/p/p/19760200009/web/696d674d61696e8dc66aa10a59ebdfullhd.webp'},
    { id: 11, name: 'Кондиционер для волос', price: '2 217 ₸', description: 'OLLIN PROFESSIONAL restore conditioner', image: 'https://pcdn.goldapple.ru/p/p/19760310227/web/696d674d61696e8dad7a9563f9c99fullhd.webp' },
    { id: 12, name: 'Лосьон для тела', price: '6 150 ₸', description: 'MILK BAOBAB flora bouquet', image: 'https://pcdn.goldapple.ru/p/p/19000174970/web/696d674d61696e8dbb9a5a46cb4ccfullhd.webp', },
    { id: 13, name: 'Пенка для лица', price: '2 775 ₸', description: 'ARAVIA LABORATORIES energy skin foam', image: 'https://pcdn.goldapple.ru/p/p/19760311239/web/696d674d61696e8dbbe7a7fd70047fullhd.webp' },
    { id: 14, name: 'Крем для кожи вокруг глаз', price: '5 831 ₸', description: 'URIAGE eau thermale water eye contour cream', image: 'https://pcdn.goldapple.ru/p/p/89142000003/web/696d674d61696e8dc44cad9583d45fullhd.webp' },
    { id: 15, name: 'Спрей-сыворотка для лица', price: '9 620 ₸', description: 'ALBA white truffle first spray serum', image: 'https://pcdn.goldapple.ru/p/p/19000076472/web/696d674d61696e8dc79863b70fd09fullhd.webp'},
    { id: 16, name: 'Бальзам для губ', price: '15 435 ₸', description: 'DEAR DAHLIA lip paradise blooming balm', image: 'https://pcdn.goldapple.ru/p/p/19760308781/web/696d674d61696e8dc3c1f0dd1bf25fullhd.webp'},
    { id: 17, name: 'Солнцезащитный крем', price: '8 723 ₸', description: 'IUNIK centella calming daily sunscreen', image: 'https://pcdn.goldapple.ru/p/p/19000156073/web/696d674d61696e8dc340ac933757afullhd.webp'},
    { id: 18, name: 'Крем для рук', price: '3 656 ₸', description: 'THE BODY SHOP hand cream coconut', image: 'https://pcdn.goldapple.ru/p/p/19000118151/web/696d674d61696e8dad1e09aa0906afullhd.webp' },
    { id: 19, name: 'Масло для волос', price: '3 091 ₸', description: 'OLLIN PROFESSIONAL tress oil', image: 'https://pcdn.goldapple.ru/p/p/29171400001/web/696d674d61696e8dad7461961a3cafullhd.webp' },
    { id: 20, name: 'Маска для лица', price: '1 200 ₸', description: 'DARLING* recharge calm-soothe-hydrate mask', image: 'https://pcdn.goldapple.ru/p/p/19760306243/web/696d67416464318dc4cb8dddd7a71fullhd.webp' }
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="gallery-page">
      <h2>Каталог товаров и продуктов</h2>
      <SearchBar placeholder="Поиск по каталогу" handleSearch={handleSearch} />
      <div className="products-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className="product-card-buttons">
              <Link to={`/product/${product.id}`} className="view-details-2">Подробнее</Link>
              <button className="cart-button" onClick={() => addToCart(product)}>🛒</button>
              <button className="like-button" onClick={() => addToFavorites(product)}>❤️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
