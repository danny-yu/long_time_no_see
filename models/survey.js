const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    q1: {
        type: String,
    },
    q2: {
        type: String,
    },
    q3: {
        type: String,
    },
})

module.exports = mongoose.model('Survey', surveySchema);
