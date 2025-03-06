const express = require('express');
const router = express.Router();
const Candidate = require('../models/Candidate');

// Fetch all candidates
router.get('/', async (req, res) => {
    try {
        const candidates = await Candidate.find();
        res.json(candidates);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
