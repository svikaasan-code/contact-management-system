const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    contactId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Phone number must be exactly 10 digits']
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
    }
});

contactSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('Contact', contactSchema);
