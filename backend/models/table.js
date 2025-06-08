const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    tableNumber: { type: Number, required: true, unique: true },
    status: { type: String, enum: ['empty', 'filled'], default: 'empty' },
});

module.exports = mongoose.model('Table', tableSchema);
