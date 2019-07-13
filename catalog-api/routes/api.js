var express = require('express');
var router = express.Router();

router.get('/catalog', async (req, res, next) => {
    require('../db/conn');
    const { Product } = require('../models');

    try {
        const products = await Product.find().populate('ioproducts').exec();

        res.status(200).send({
            success: 'true',
            data: products
        })
    } catch(error) {
        response.status(500).send(error);
    }
});

router.get('/catalog/:id', async (req, res, next) => {
    require('../db/conn');
    const { Product } = require('../models');

    try {
        const result = await Product.findById(req.params.id).populate('ioproducts').exec();
    
        res.status(200).send({
            success: 'true',
            data: result
        })
    } catch(error) {
        response.status(500).send(error);
    }
});

router.post('/catalog', async (req, res, next) => {
    require('../db/conn');
    const { Product } = require('../models');

    try {
        const product = new Product(req.body);
        const result = await product.save();
    
        res.status(200).send({
            success: 'true',
            data: result
        })
    } catch(error) {
        response.status(500).send(error);
    }
});

router.put('/catalog/:id', async (req, res, next) => {
    require('../db/conn');
    const { Product } = require('../models');

    try {
        const product = await Product.findById(req.params.id).exec();
        product.set(req.body);
        const result = await product.save();
    
        res.status(200).send({
            success: 'true',
            data: result
        })
    } catch(error) {
        response.status(500).send(error);
    }
});

router.delete('/catalog/:id', async (req, res, next) => {
    require('../db/conn');
    const { Product } = require('../models');

    try {
        var result = await Product.deleteOne({ _id: req.params.id }).exec();
    
        res.status(200).send({
            success: 'true',
            data: result
        })
    } catch(error) {
        response.status(500).send(error);
    }
});

module.exports = router;
