const express = require('express');
const Survey = require('./../models/survey');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('form');
});

router.get('/:id', async (req, res) => {
    const survey = await Survey.findById(req.params.id)
    if (survey == null) res.redirect('/')
    res.render('show', {survey: survey})
});

router.post('/', async (req, res) => {
    let survey = new Survey({
        email: req.body.email,
        name: req.body.name,
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
    });
    try {
        survey = await survey.save();
        res.redirect(`/form/${survey.id}`);
    } catch (e) {
        console.log(e);
        res.send("yikes");
    }

});

module.exports = router;
