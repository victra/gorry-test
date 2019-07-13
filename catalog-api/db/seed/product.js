const models = require('../../models');

const createProducts = async () => {
    const product1 = new models.Product({
        _id: '5d2961b3710222038d464671',
        name: 'Buku',
        description: 'ini buku tulis bagus',
        price: 20000,
    });
    const product2 = new models.Product({
        _id: '5d2961b3710222038d464672',
        name: 'Pensil',
        description: 'ini pensil tulis bagus',
        price: 2000,
    });
  
    await product1.save();
    await product2.save();
};

module.exports = createProducts