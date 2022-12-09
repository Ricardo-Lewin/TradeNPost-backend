const router = require('express').Router();
const User = require('../models/User');

// signup 

router.post('/signup', async(req, res) => {
    const {firstName, lastName, email, password} = req.body;

    try {
        const user = await User.create({firstName, lastName, email, password});
        res.json(user);
    } catch (e) {
        if(e.code === 11000) return res.status(400).send('Email already exists')
    }
})

// login

router.post('/login', async(req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findByCredentials(email, password);
        res.json(user);
    } catch (e) {
        res.status(400).send(e.message)
    }
})

// get users;

router.get('/', async(req, res) => {
    try {
        const users = await User.find({isAdmin: false}).populate('orders');
        res.json(users)
    } catch (e) {
        res.status(400).send(e.message)
    }
})
module.exports = router;