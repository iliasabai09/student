const mongoose = require('mongoose');

const Product = mongoose.model('Product', new mongoose.Schema({
    name: {type: String, required: true},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true}
}));

module.exports = Product;
