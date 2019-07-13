require('../conn');
const { Product } = require('../../models');
const createProducts = require('./product');

const ExecSeed = async () => {
    await Promise.all([
        Product.deleteMany({}),
    ]);

    createProducts();
    console.log('Gorry seeding DB DONE!');
}

ExecSeed();