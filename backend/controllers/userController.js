const LeadData = require("../model/LeadData")

exports.createUser = async (req, res) => {
    try {
        const leadData = new LeadData(req.body);
        const savedData = await leadData.save();
        res.status(201).json(savedData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};