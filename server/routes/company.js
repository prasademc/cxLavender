const exporess = require('express');
const mongoose = require('mongoose');
const router = exporess.Router();

require('../models/Company.js');

const Company = mongoose.model('Company');

router.get('/', async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (error) {
        res.json({message:error})
    }
});

module.exports = router;