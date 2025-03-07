const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: String,
    email: String,
    loginID: String,
    password: String,
    testLinkSent: { type: Boolean, default: false },
    marks: Number,                   // Existing marks field
    decision: { type: String, enum: ['Selected', 'Rejected', 'Pending'], default: 'Pending' }  // New
});

module.exports = mongoose.model('Candidate', candidateSchema);
