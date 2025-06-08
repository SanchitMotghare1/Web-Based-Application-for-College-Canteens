const Table = require('../models/table');

// Get all tables
exports.getTables = async (req, res) => {
    try {
        const tables = await Table.find();
        res.json(tables);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

// Update table status
exports.updateTableStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const table = await Table.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        res.json(table);
    } catch (err) {
        res.status(500).send('Server error');
    }
};
