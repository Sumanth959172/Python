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

// Save credentials + testLinkSent
router.put('/:id/credentials', async (req, res) => {
    const { loginID, password, testLinkSent } = req.body;

    console.log('Updating candidate:', req.params.id, { loginID, password, testLinkSent });

    try {
        const candidate = await Candidate.findById(req.params.id);
        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

        candidate.loginID = loginID;
        candidate.password = password;
        candidate.testLinkSent = testLinkSent;         // ✅ store this flag
        await candidate.save();
        res.json({ message: 'Credentials updated successfully', candidate });
    } catch (err) {
        console.error('Failed to save credentials:', err);
        res.status(500).json({ message: err.message });
    }
});

// Candidate login (used in candidate portal)
router.post('/login', async (req, res) => {
    const { loginID, password } = req.body;

    console.log('Candidate login attempt:', { loginID, password });

    try {
        const candidate = await Candidate.findOne({ loginID, password });
        if (!candidate) {
            return res.status(401).json({ message: 'Invalid Login ID or Password' });
        }

        res.json({ message: 'Login successful', candidate });
    } catch (err) {
        console.error('Candidate login failed:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Fetch candidates for whom test link was sent
router.get('/test-link-sent', async (req, res) => {
    try {
        const candidates = await Candidate.find({ testLinkSent: true });
        res.json(candidates);
    } catch (err) {
        console.error('Failed to fetch candidates:', err);
        res.status(500).json({ message: 'Failed to fetch candidates' });
    }
});


router.put('/:id/marks', async (req, res) => {
    const { marks } = req.body;

    try {
        const candidate = await Candidate.findById(req.params.id);
        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

        candidate.marks = marks;  // ✅ Update marks
        await candidate.save();

        res.json({ message: 'Marks updated successfully' });
    } catch (err) {
        console.error('Failed to save marks:', err);
        res.status(500).json({ message: 'Failed to save marks' });
    }
});

router.put('/:id/decision', async (req, res) => {
    const { decision } = req.body;

    try {
        const candidate = await Candidate.findById(req.params.id);
        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

        candidate.decision = decision;
        await candidate.save();

        res.json({ message: 'Decision saved successfully!' });
    } catch (err) {
        console.error('Failed to save decision:', err);
        res.status(500).json({ message: 'Failed to save decision' });
    }
});

// Fetch candidate status for HR track status page
router.get('/status', async (req, res) => {
    try {
        const candidates = await Candidate.find({}, 'name email testLinkSent testSubmitted marks decision');
        res.json(candidates);
    } catch (err) {
        console.error('Failed to fetch candidate status:', err);
        res.status(500).json({ message: 'Failed to fetch candidate status' });
    }
});

router.put('/:id/submit-test', async (req, res) => {
    try {
        const candidate = await Candidate.findById(req.params.id);
        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

        candidate.testSubmitted = true;  // ✅ Update testSubmitted
        await candidate.save();

        res.json({ message: 'Test submission recorded successfully' });
    } catch (err) {
        console.error('Failed to update test submission:', err);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;