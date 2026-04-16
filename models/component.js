const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  componentName: { type: String, required: true },
  partNo: { type: String, required: true, unique: true },
  ecn: String,
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Component', schema);