const mongoose = require('mongoose');

const Order = mongoose.model('Order', new mongoose.Schema({
    country: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    payType: {type: String, required: true},
    cardNumber: {type: String, required: true},
    payTime: {type: String, required: true},
    status: {type: String, required: false, default: 'создан'},
}));

module.exports = Order;
