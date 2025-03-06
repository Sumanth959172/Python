const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: String,
    email: String
});

module.exports = mongoose.model('Candidate', candidateSchema);
