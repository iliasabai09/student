const mongoose = require('mongoose');

// Строка подключения к MongoDB Atlas
const mongoURI = 'mongodb+srv://angelinagelbling:Pass123@cluster0.wgeygwv.mongodb.net/nodejs?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Failed to connect to MongoDB Atlas', err));
