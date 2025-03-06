const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    candidateName: String,
    candidateEmail: String,
    feedback: String,
    submittedAt: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

router.post('/', async (req, res) => {
    try {
        const { candidateName, candidateEmail, feedback } = req.body;
        const newFeedback = new Feedback({ candidateName, candidateEmail, feedback });
        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to submit feedback', error: err.message });
    }
});

module.exports = router;
