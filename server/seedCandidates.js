const mongoose = require('mongoose');
const Candidate = require('./models/Candidate');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        await Candidate.insertMany([
            { name: 'John Doe', email: 'john@example.com' },
            { name: 'Jane Smith', email: 'jane@example.com' },
            { name: 'Sumanth', email: 'ane@example.com' }
        ]);
        console.log('✅ Candidates seeded');
        mongoose.disconnect();
    })
    .catch(console.error);
