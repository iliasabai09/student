const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;
function connectionMongoose() {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: false,
    })
        .then(() => console.log('Connected to MongoDB Atlas'))
        .catch(err => console.error('Failed to connect to MongoDB Atlas', err));
}

module.exports = connectionMongoose;
