// seedHiringManagers.js (create this in your server folder temporarily)

require('dotenv').config();
const mongoose = require('mongoose');
const HiringManager = require('./models/HiringManager');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        await HiringManager.create({
            name: 'Hiring Manager 1',
            email: 'manager@example.com',
            password: 'password123'
        });
        console.log('Hiring Manager Seeded');
        process.exit();
    })
    .catch(err => {
        console.error('Error:', err);
        process.exit(1);
    });
