const express = require('express');
const router = express.Router();
const HR = require('../models/HR');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const hr = await HR.findOne({ email, password });

    if (hr) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

module.exports = router;
