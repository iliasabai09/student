require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const connectionMongoose = require("./connections/connectionMongo");
const User = require("./schemas/User.schema");
const Product = require("./schemas/Product.schema");
const Order = require("./schemas/Order.schema");

const jwtSecret = "mySecretKey";

const app = express();
const port = process.env.PORT || 5002;

app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE'
}));

app.options('*', cors()); // Для обработки предварительных запросов

app.use(bodyParser.json());

connectionMongoose();




app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  console.log('Register request data:', { username, password });
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
    });
    await user.save();
    // res.send();
    const token = jwt.sign({hash: hashedPassword}, jwtSecret, {expiresIn: '1h'});
    res.json({token});
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Error during registration' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Login request data:', { username, password });
  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log('User not found');
      return res.status(401).json({message: 'Invalid username or password'});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password does not match');
      return res.status(401).json({message: 'Invalid username or password'});
    }
    const token = jwt.sign({userId: user._id}, jwtSecret, {expiresIn: '1h'});
    res.json({token, userId: user._id});
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Error during login' });
  }
});

app.get('/user', async (req, res) => {
  const userId = req.headers['x-user-id'];
  console.log('Received user ID:', userId);

  try {
    const user = await User.findById(userId).select('-password');
    res.json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.post('/admin/login', (req, res) => {
    const { username, password } = req.body;

    const token = jwt.sign({ username }, jwtSecret, { expiresIn: '1h' });
    res.json({ token });
});

app.post('/products', async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      quantity: req.body.quantity,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image
    });

    const savedProduct = await product.save();
    console.log('Product saved:', savedProduct);
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Ошибка при добавлении продукта' });
  }
});

app.post('/orders', async (req, res) => {
  try {
    const order = new Order(req.body);

    const saveOrder = await order.save();
    console.log('Order saved:', saveOrder);
    res.status(201).json(saveOrder);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({message: 'Ошибка при добавлении продукта'});
  }
});

app.put('/orders', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.body._id, req.body)
    res.status(201).json(order);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({message: 'Ошибка при добавлении продукта'});
  }
});

app.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(201).json(orders);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({message: 'Ошибка при добавлении продукта'});
  }
});


app.post('/products/delete', async (req, res) => {
  try {
    const response = await Product.findOneAndDelete({name: req.body.name});
    res.status(201).json(response);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({message: 'Ошибка при добавлении продукта'});
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
