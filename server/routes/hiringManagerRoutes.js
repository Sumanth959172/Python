const express = require('express');
const router = express.Router();
const HiringManager = require('../models/HiringManager');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const manager = await HiringManager.findOne({ email, password });
        if (!manager) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.json({ message: 'Login successful', manager });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
