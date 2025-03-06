require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const candidateRoutes = require('./routes/candidateRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const hiringManagerRoutes = require('./routes/hiringManagerRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

app.use('/api/hr', require('./routes/hrRoutes'));
app.use('/api/candidates', candidateRoutes);
app.use('/api/candidates', require('./routes/candidateRoutes'));
app.use('/api/feedback', feedbackRoutes);
app.use('/api/hiring-managers', hiringManagerRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
