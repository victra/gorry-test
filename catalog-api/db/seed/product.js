const models = require('../../models');

const createProducts = async () => {
    const product1 = new models.Product({
        name: 'Buku',
        description: 'ini buku tulis bagus',
        price: 20000,
        quantity: 51,
    });
    const product2 = new models.Product({
        name: 'Pensil',
        description: 'ini pensil tulis bagus',
        price: 2000,
        quantity: 16,
    });
  
    await product2.save();
    await product1.save();
};

module.exports = createProducts