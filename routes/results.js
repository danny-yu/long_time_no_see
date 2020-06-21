const express = require('express');
const Survey = require('./../models/survey');
const router = express.Router();

router.get('/', async (req, res) => {
    const surveys = await Survey.find()
    res.render('results', {surveys: surveys});
});



module.exports = router;
