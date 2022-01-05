const {Router} = require('express');
const router = Router();
const User = require('./../models/User')

router.post('/', async (req, res) => {
    const {body} = req;
    const {email, name, surname, password, avatar} = body;
    const user = new User({
        email,
        name,
        surname,
        passwordHash: password,
        avatar,
    })
    const savedUser = await user.save();
    res.json(savedUser);
}); 

router.get('/', async (req, res) => {
    const getUsers  = await User.find()
    res.json(getUsers);
    console.log(getUsers)
})

module.exports = router;