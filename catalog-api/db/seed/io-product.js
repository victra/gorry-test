const models = require('../../models');

const createIOProducts = async () => {
    const buku1 = new models.IOProduct({
        product_id: '5d2961b3710222038d464671',
        quantity: 5,
        action: 'masuk',
    });
    const buku2 = new models.IOProduct({
        product_id: '5d2961b3710222038d464671',
        quantity: 2,
        action: 'keluar',
    });
  
    await buku1.save();
    await buku2.save();
};

module.exports = createIOProducts