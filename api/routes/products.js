const {Router} = require('express');
const router = Router();
const Product = require('../models/products');

router.get('/', async(req, res) => {
    const getProducts  = await Product.find()
    res.json(getProducts);
    console.log(getProducts)
});

router.post('/', async (req, res) => {
    const { title, emoji, products, invited, invited1, invited2, invited3, invited4, invited5 } = req.body;
    const newProduct = new Product({
        title,
        emoji,
        products,
        invited,
        invited1, 
        invited2,
        invited3,
        invited4,
        invited5,
    });
    await newProduct.save();
    res.send({Status: 200})
});
router.delete('/:id', async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send({Message: 'Product Deleted'});
})

module.exports = router;
