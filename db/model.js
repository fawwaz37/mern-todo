const mongoose = require('mongoose');

const item = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
}, { timestamps: true });

const Item = mongoose.model('item', item)

module.exports = { Item }