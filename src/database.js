const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-pedidos';

mongoose.connect(URI)
    .then(db => console.log('DB is working'))
    .catch(err => console.error(err));


module.exports = mongoose;