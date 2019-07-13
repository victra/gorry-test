require('../conn');
const { Product, IOProduct } = require('../../models');
const createProducts = require('./product');
const createIOProducts = require('./io-product');

const ExecSeed = async () => {
    await Promise.all([
        Product.deleteMany({}),
        IOProduct.deleteMany({}),
    ]);

    createProducts();
    createIOProducts();
    console.log('Gorry seeding DB DONE!');
}

ExecSeed();