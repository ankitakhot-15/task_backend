const mongoose = require("mongoose");

// Import enum map
const { MachineTypeMap } = require("../utils/enums");
// adjust path if needed

const schema = new mongoose.Schema(
  {
    machineName: { type: String, required: true },

    serialNumber: {
      type: String,
      required: true,
      unique: true,
    },

    manufacturerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MachineManufacturer",
      required: true,
    },

    model: { type: String },

    year: {
      type: Number,
      min: 1900,
      max: new Date().getFullYear(),
    },

    type: {
      type: Number,
      enum: [1, 2, 3, 4, 5, 6], // DB validation
      required: true,
    },

    locationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

schema.set("toJSON", {
  transform: function (doc, ret) {
    ret.type = MachineTypeMap[ret.type] || "UNKNOWN"; // 👈 replace number
    return ret;
  },
});

module.exports = mongoose.model("Machine", schema);
