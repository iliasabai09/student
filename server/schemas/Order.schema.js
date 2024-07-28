const mongoose = require('mongoose');

const Order = mongoose.model('Order', new mongoose.Schema({
    country: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    payType: {type: String, required: true},
    cardNumber: {type: String, required: true},
    payTime: {type: String, required: true}
}));

<<<<<<< HEAD
module.exports = Order;
=======
module.exports = Order;
>>>>>>> 2d7bf04af77552df4d770bb40e2f508685eee9b5
