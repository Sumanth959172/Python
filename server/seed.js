const HR = require('./models/HR');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        await HR.create({ email: 'hr@example.com', password: 'password123' });
        console.log('HR seeded');
        mongoose.disconnect();
    })
    .catch(console.error);
