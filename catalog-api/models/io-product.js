const ioProductSchema = require('../db/schema/io-product');
const mongoose = require('mongoose');

ioProductSchema.virtual('products', {
    ref: 'Product',
    localField: 'product_id',
    foreignField: '_id',
    justOne: true // set true for one-to-one relationship
})

const IOProduct = mongoose.model('IOProduct', ioProductSchema);

module.exports = IOProduct