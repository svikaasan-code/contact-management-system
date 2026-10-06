const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

router.post('/contacts', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        const savedContact = await contact.save();

        res.status(201).json({
            message: 'Contact created successfully',
            contact: savedContact
        });
    } catch (error) {
        res.status(400).json({
            message: 'Failed to create contact',
            error: error.message
        });
    }
});

router.get('/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find();

        res.status(200).json({
            message: 'Contacts fetched successfully',
            contacts: contacts
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch contacts',
            error: error.message
        });
    }
});

router.get('/contacts/:id', async (req, res) => {
    try {
        const contact = await Contact.findOne({
            contactId: req.params.id
        });

        if (!contact) {
            return res.status(404).json({
                message: 'Contact not found'
            });
        }

        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch contact',
            error: error.message
        });
    }
});

router.put('/contacts/:id', async (req, res) => {
    try {
        const updatedContact = await Contact.findOneAndUpdate(
            { contactId: req.params.id },
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedContact) {
            return res.status(404).json({
                message: 'Contact not found'
            });
        }

        res.status(200).json({
            message: 'Contact updated successfully',
            contact: updatedContact
        });
    } catch (error) {
        res.status(400).json({
            message: 'Failed to update contact',
            error: error.message
        });
    }
});

router.delete('/contacts/:id', async (req, res) => {
    try {
        const deletedContact = await Contact.findOneAndDelete({
            contactId: req.params.id
        });

        if (!deletedContact) {
            return res.status(404).json({
                message: 'Contact not found'
            });
        }

        res.status(200).json({
            message: 'Contact deleted successfully',
            contact: deletedContact
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to delete contact',
            error: error.message
        });
    }
});

module.exports = router;
