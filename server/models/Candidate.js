const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: String,
    email: String,
    loginID: String,
    password: String,
    testLinkSent: Boolean,
    testSubmitted: Boolean,  // ✅ New Field
    marks: Number,
    decision: String  // Selected, Rejected, Pending
});

module.exports = mongoose.model('Candidate', candidateSchema);
