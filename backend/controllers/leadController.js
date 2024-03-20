const LeadData = require("../model/LeadData")


// Create a new lead
exports.createLead = async (req, res) => {
    try {
        const leadData = new LeadData(req.body);
        const savedData = await leadData.save();
        res.status(201).json(savedData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


// Get all leads
exports.getAllLeads = async (req, res) => {
    try {
        const leads = await LeadData.find();
        res.status(200).json(leads);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};