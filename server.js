const express = require('express');
const mongoose = require('mongoose');
const formRouter = require('./routes/form')
const resultsRouter = require('./routes/results')
const app = express();

mongoose.connect('mongodb://localhost/app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false}));

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/form', formRouter);
app.use('/results', resultsRouter)
app.listen(5000);
