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

router.put('/:id/credentials', async (req, res) => {
    const { loginID, password } = req.body;

    console.log(`Updating candidate ${req.params.id} with`, { loginID, password });

    try {
        const candidate = await Candidate.findById(req.params.id);
        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

        candidate.loginID = loginID;
        candidate.password = password;

        await candidate.save();
        res.json({ message: 'Credentials updated successfully' });
    } catch (err) {
        console.error('Failed to save credentials:', err);
        res.status(500).json({ message: err.message });
    }
});



module.exports = router;
