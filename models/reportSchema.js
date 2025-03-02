const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    areaType: {
        type: String,
        enum: ['land', 'water','Land','Water'],
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    image: {
        type: String, // URL or path to the image
        required: false
    }
});

const report = mongoose.model('report', reportSchema);
module.exports = report;
