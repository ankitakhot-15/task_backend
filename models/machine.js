const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    machineName: { type: String, required: true },
    serialNumber: { type: String, required: true, unique: true },
    manufacturerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MachineManufacturer",
      required: true,
    },
    //   model: String,
    //   year: Number,
    //   type: { type: Number, required: true },
    model: String,
    year: { type: Number, min: 1900, max: new Date().getFullYear() },

    type: {
      type: Number,
      enum: [1, 2, 3, 4, 5, 6], // enum validation
      required: true,
    },
    locationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Machine", schema);
