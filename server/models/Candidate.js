const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: String,
    email: String,
    loginID: String,
    password: String,
    testLinkSent: { type: Boolean, default: false },  // track if link was sent
                                
});

module.exports = mongoose.model('Candidate', candidateSchema);
