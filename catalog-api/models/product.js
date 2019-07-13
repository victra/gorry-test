const productSchema = require('../db/schema/product');
const mongoose = require('mongoose');

productSchema.virtual('ioproducts', {
    ref: 'IOProduct',
    localField: '_id',
    foreignField: 'product_id',
    justOne: false // set true for one-to-one relationship
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product