const mongoose = require('mongoose');
const { Provider } = require('../models/provider');

const url = 'mongodb://127.0.0.1:27017/provider_db';

const db = mongoose.connect(url)
    .then(result => {
        console.log('Successful db connection!');
    })
    .catch(err => console.log(err));

module.exports = { Provider, db };