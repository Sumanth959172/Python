const express = require('express');
const router = express.Router();
const HR = require('../models/HR');

// HR Login (this is the only responsibility for hrRoutes)
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const hr = await HR.findOne({ email, password });

        if (hr) {
            res.json({ success: true, hr });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        console.error('HR login error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;