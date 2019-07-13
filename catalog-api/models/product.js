const productSchema = require('../db/schema/product');
const mongoose = require('mongoose');

const Product = mongoose.model('Product', productSchema);

module.exports = Product