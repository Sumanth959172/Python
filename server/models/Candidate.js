const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: String,
    email: String,
    loginID: String,       // New field
    password: String       // New field
});

module.exports = mongoose.model('Candidate', candidateSchema);
