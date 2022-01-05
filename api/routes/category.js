const {Router} = require('express');
const router = Router();
const Categories = require('../models/categories');

router.get('/', async (req, res) => {
    const getCats = await Categories.find();
    res.json(getCats);
    console.log(getCats);
})

router.post('/', async (req, res) => {
    const { title, emoji} = req.body;
    const newCat = new Categories({
        title,
        emoji,
    });
    await newCat.save();
    res.send({Status: 200})
})

router.delete('/:id', async (req, res) => {
    const deletedCategorie = await Categories.findByIdAndDelete(req.params.id);
    res.send({Message: 'Categorie Deleted'});
})
module.exports = router; 