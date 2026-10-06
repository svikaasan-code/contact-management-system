const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const Contact = require('./models/Contact');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(express.json());

app.use('/api', contactRoutes);

mongoose.connect(process.env.MONGO_URI, {
    dbName: 'contact_management'
})
.then(async () => {
    console.log('MongoDB connected successfully');
    await Contact.syncIndexes();
    console.log('Contact indexes synchronized successfully');
})
.catch((error) => {
    console.error('MongoDB connection failed:', error.message);
});

app.get('/', (req, res) => {
    res.json({
        message: 'Contact Management System API is running'
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
