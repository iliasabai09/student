const mongoose = require('mongoose');

const Product = mongoose.model('Product', new mongoose.Schema({
    name: {type: String, required: true},
    quantity: {type: Number, required: true},
    price: {type: Number, required: false, default: 1},
    description: {type: String, required: true},
    image: {type: String, required: true, default: ""},
}));

module.exports = Product;
