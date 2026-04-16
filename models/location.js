const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true },
//   latitude: Number,
//   longitude: Number
 latitude: { type: Number, min: -90, max: 90 },
longitude: { type: Number, min: -180, max: 180 }
}, { timestamps: true });

module.exports = mongoose.model('Location', schema);