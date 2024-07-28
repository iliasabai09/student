import React, { useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import '../Styles/ProductDetails.css';

const ProductCard = ({ addToFavorites, addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('description');

  const products = [
    { id: 1, name: 'Lipstick stick', price: '3 048 ₸', description: 'INFLUENCE BEAUTY influence. Взгляд на классику из будущего. Этот продукт - уникальное сочетание всех лучших качеств помады-стика. Инновационная формула CONJUNCTION MIX отвечает за ее основные свойства: полуматовый финиш, стойкость, высокую пигментацию и равномерное нанесение с первого раза. Помада увлажняет и разглаживает губы. Полупрозрачный корпус, через который виден весь механизм помады, подчеркивает ее лаконичность и функциональность.', image: 'https://images.verishop.com/doll-10-the-multi-tasker-3-in-1-cream-color-stick/7835723727042-3764476317?auto=format&cs=strip&fit=max&w=768&dpr=2', composition: 'RICINUS COMMUNIS (CASTOR) SEED OIL, OCTYLDODECANOL, ETHYLHEXYL PALMITATE, OZOKERITE, PARAFFIN, ISONONYL ISONONANOATE, BIS-DIGLYCERYL POLYACYLADIPATE-2, CAPRYLIC/CAPRIC TRIGLYCERIDE, SYNTHETIC FLUORPHLOGOPITE, SILICA DIMETHYL SILYLATE, COPERNICIA CERIFERA CERA [COPERNICA CERIFERA (CARNAUBA) WAX], AROMA (FLAVOR), LIMONENE, HEXYL CINNAMAL, GLYCOL MONTANATE, SHOREA ROBUSTA RESIN, METHYLPARABEN, PROPYLPARABEN, BHT, CI 77891 (TITANIUM DIOXIDE), CI 17200 (RED 33 LAKE), CI 15850:1 (RED 7), CI 45410 (RED 28 LAKE), CI 42090 (BLUE 1 LAKE), CI 77499 (IRON OXIDES).Состав: масло ши, витамин Е, минеральные масла, натуральные красители.', application: 'Наносите обычным способом или кистью на кожу губ.' },
    { id: 2, name: 'Primer', price: '5 850 ₸', description: 'DARLING* lash cocoon. Я твоя ТЕРМОСТОЙКАЯ тушь, которая мягко заворачивает каждую ресничку в "КОКОН", устойчивый к любым внешним воздействиям: слезы, пот, дождь, даже бассейн не смогут лишить ваши глаза ВЫРАЗИТЕЛЬНОСТИ. Волшебство исчезнет только при воздействии теплой воды от 38°C, без использования дополнительных средств. Неужели мы создали идеальную тушь?', image: 'https://pcdn.goldapple.ru/p/p/19000047864/web/696d674d61696e8dc4cb8bde73e4ffullhd.webp',  composition: ' Water, Styrene/Acrylates/Ammonium Methacrylate Copolymer, Iron Oxides (CI 77499), Butylene Glycol, Alcohol Denat., Pullulan, Acrylates Copolymer, Polyacrylate-13, Silica, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Polyisobutene, Phenoxyethanol, Polysorbate 80, Sodium Dehydroacetate, C11-15 Pareth-7, Caprylyl Glycol, Sodium Laureth-12 Sulfate, Tetrasodium EDTA, Sorbitan Isostearate, Polysorbate 20, Polysorbate 60, Ethylhexylglycerin, Potassium Sorbate, Disodium EDTA.', application: 'Взять щеточку и аккуратно нанести тушь от основания ресниц зигзагообразными движениями. Нет необходимости в очищающих средствах. Смывать теплой водой от 38°C.' },
    { id: 3, name: 'Powder', price: '7 896 ₸', description: 'ARTDECO perfect teint foundation. Тональный крем для безупречной кожи Perfect Teint Foundation. Легкая, как пёрышко текстура не только не содержит минеральных масел, но и, благодаря входящим в состав нежным частицам пудры, обладает абсорбирующим свойством. Результат – лёгкий матовый финиш, текстура растворяется на коже, благодаря чему кожа выравнивается и выглядит естественно. Без эффекта маски! Тональный крем отличается своей стойкостью, средней и высокой плотностью покрытия, которая тем не менее едва заметна на коже. Небольшие неровности и выпуклости на коже можно визуально скорректировать с помощью крема Perfect Teint Foundation, а, благодаря входящей в состав воде, текстура действует освежающе на кожу. Преимущество: входящие в состав компоненты увлажняют кожу и ухаживают за ней, склонная к раздражению кожа успокаивается, а экстракт персиковых лепестков защищает кожу от вредного воздействия окружающей среды. Абсолютно идеальный тональный крем!', image: 'https://warpaintformen.com/cdn/shop/products/Anti-shine-02-min_1512x.jpg?v=1684940668', composition: 'Aqua (Water), Cyclopentasiloxane, Cyclohexasiloxane, Isododecane, Glycerin, Cetyl PEG/PPG-10/1 Dimethicone, Microcrystalline Cellulose, Alcohol Denat., PEG-10 Dimethicone, Polyglyceryl-4 Isostearate, Copernicia Cerifera Cera, Polymnia Sonchifolia Root Juice, Euterpe Oleracea Fruit Extract, Tocopheryl Acetate, Ascorbyl Tetraisopalmitate, Sodium Hyaluronate, Alpha-Glucan Oligosaccharide, Inulin, Shorea Robusta Resin, Lactobacillus, Phenoxyethanol, DMDM Hydantoin, Ethylhexylglycerin, Potassium Sorbate, Sodium Benzoate, Sodium Chloride, Disteardimonium Hectorite, Magnesium Sulfate, Triethoxycaprylylsilane, Paraffin, Propylene Carbonate, Parfum (Fragrance), Aluminum Hydroxide, Tapioca Starch, Glycol Montanate, Maltodextrin, Sorbic Acid, Citric Acid, Limonene. +/-: CI 77891 (Titanium Dioxide), CI 77492 (Iron Oxide), CI 77491 (Iron Oxide), CI 77499 (Iron Oxide).', application: 'Пару капель тонального средства нанесите на тыльную сторону ладони, затем равномерно распределите крем на коже лица с помощью кисточки, спонжа для макияжа или пальцами. Перед применением хорошо взболтать.' },
    { id: 4, name: 'Foundation cream', price: '1 459 ₸', description: 'ESSENCE dip eyeliner. Bодостойкая подводка насыщенного черного цвета обеспечивает до 24 часов безупречной стойкости! Благодаря более мягкому аппликатору подводка dip eyeliner waterproof 24h long-lasting от essence обеспечивает приятное, легкое нанесение.', image: 'https://images.verishop.com/laura-mercier-real-flawless-foundation/7804033532098-2879903032?auto=format&cs=strip&fit=max&w=768&dpr=2', composition: 'Aqua (water), propanediol, ammonium acrylates copolymer, glyceryl rosinate, acrylates/ethylhexyl acrylate copolymer, pvp, methylpropanediol, xanthan gum, ethylhexylglycerin, simethicone, caprylyl glycol, phenylpropanol, cellulose, sodium sulfate, phenoxyethanol, sodium dehydroacetate, ci 77266 (black 2) (nano), ci 77499 (iron oxides).', application: 'Подводка для глаз Dip Eyeliner. Водостойкая' },
    { id: 5, name: 'Blush', price: '10 020 ₸', description: 'KIKO MILANO unlimited blush. Стойкие пудровые румяна с регулируемой интенсивностью. Идеально подходят для того, чтобы: - оживить цвет лица притягательным здоровым сиянием с утра до ночи. В чем их особенности? - бархатистая ультрапигментированная компактная текстура, которая добавляет цвета и сохраняет стойкость до 12 часов*; - они мгновенно растушевываются на коже, обеспечивая приятное ощущение комфорта; - их легко растушевать, чтобы создать интенсивность от легкой до насыщенной; - представлены в матовом и металлическом финише; - удобная упаковка с компактным зеркалом, чтобы поправлять макияж на ходу. Протестировано дерматологами. Некомедогенно.', image: 'https://images.verishop.com/westman-atelier-super-loaded-tinted-highlight/7804033728706-611752841?auto=format&cs=strip&fit=max&w=768&dpr=2', composition: 'TALC, LAUROYL LYSINE, POLYMETHYL METHACRYLATE, MICA, DIMETHICONOL STEARATE, ALUMINUM HYDROXIDE, CAPRYLIC/CAPRIC TRIGLYC ERIDE, DIMETHICONE, TRIMETHYLSILOXYSILICATE, CAPRYLYL GLYCOL, PHENOXYETHANOL, MAGNESIUM MYRISTATE, HEXYLENE GLYCOL, DIMETHICONE CROS SPOLYMER, CI 15850 (RED 7), CI 77492 - CI 77499 (IRON OXIDES), CI 19140(YELLOW 5 LAKE), CI 77891(TITANIUM DIOXIDE), (IRON OXIDES).', application: 'Нанесите румяна на скулы и виски, растушевывая к контурам лица при помощи кисти для пудры Face 10 Blush Brush.' },
    { id: 6, name: 'Concealer', price: '4 390 ₸', description: 'MAYBELLINE NEW YORK the eraser eye. Консилер для кожи вокруг глаз Maybelline The Eraser Eye быстро спрячет следы усталости, бессонных ночей, стресса и взбодрит чувствительную кожу. Освежит тусклый взгляд, добавит ему сияние. Это средство от Maybelline имеет удобный аппликатор с миниатюрным спонжем. Наносить состав легко и удобно. Формула The Eraser Eye уникальная. В нее включены экзотические компоненты. Среди них целебные ягоды годжи. Они обеспечивают активный уход за веками. Этому консилеру для кожи вокруг глаз непременно следует быть в косметичке каждой девушки.', image: 'https://warpaintformen.com/cdn/shop/products/Concealer-02-min_1512x.jpg?v=1700476964', composition: 'Aqua/Water/Eau, Cyclopentasiloxane, Dimethicone, Isododecane, Glycerin, Peg-9 Polydimethylsiloxyethyl Dimethicone, Butylene Glycol, Dimethicone Crosspolymer, Nylon-12, Disteardimonium Hectorite, Cyclohexasiloxane, Peg-10 Dimethicone, Cetyl Peg/Ppg-10/1 Dimethicone, Phenoxyethanol, Sodium Chloride, Polyglyceryl-4 Isostearate, Caprylyl Glycol, Disodium Stearoyl Glutamate, Ethylhexylglycerin, Methylparaben, Lycium Barbarum Fruit Extract, Chlorphenesin, Ethylparaben, Aluminum Hydroxide, Peg-9, N-Hydroxysuccinimide, Palmitoyl Oligopeptide, Chrysin, Palmitoyl Tetr Apeptide-7. [+/- May Contain/Peut Contenir: Ci 77891/Titanium Dioxide, Ci 77491, Ci 77492, Ci 77499/Iron Oxides]', application: 'Нанести на нужные зоны лица аппликатором, растушевать подушечками пальцев или спонжем. Отлично сочетается со стойкими тональными основами и пудрами серии INFAILLIBLE.' },
  
  ];
  
  const product = products.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleBack = () => {
    navigate('/gallery');
  };

  return (
    <div className="product-page">
      <div className="product-card-details">
        <div className="product-image-section">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info-section">
          <h2>{product.name}</h2>
          <p>{product.price}</p>

          <div className="tabs">
            <button className={activeTab === 'description' ? 'active' : ''} onClick={() => setActiveTab('description')}>Описание</button>
            <button className={activeTab === 'composition' ? 'active' : ''} onClick={() => setActiveTab('composition')}>Состав</button>
            <button className={activeTab === 'application' ? 'active' : ''} onClick={() => setActiveTab('application')}>Применение</button>
          </div>

          {activeTab === 'description' && <p>{product.description}</p>}
          {activeTab === 'composition' && <p>{product.composition}</p>}
          {activeTab === 'application' && <p>{product.application}</p>}

          <div className="product-card-buttons">
            <button className="like-button" onClick={() => addToFavorites(product)}>❤️ Понравилось</button>
            <button className="cart-button" onClick={() => addToCart(product)}>🛒 В корзину</button>
            <button className="back-button" onClick={handleBack}>← Назад к каталогу</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;