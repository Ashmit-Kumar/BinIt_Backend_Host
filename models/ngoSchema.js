const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        street: String,
        city: String,
        state: String,
        pincode: String
    },
    contact: {
            type: String,
            required: true,
            unique: true
    },
    website: {
        type: String,
        required: false
    },
    establishedYear: {
        type: Number,
        required: true
    },
    missionStatement: {
        type: String,
        required: true
    },
    areasOfWork: [{
        type: String
    }]
});

const NGO = mongoose.model('NGO', ngoSchema);
module.exports = NGO;
