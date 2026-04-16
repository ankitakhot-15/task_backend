const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    componentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Component",
      required: true,
    },
    machineId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Machine",
      required: true,
    },
    operationCode: { type: String, required: true },
    operationName: { type: String, required: true },
    operationDescription: String,
    operationType: {
      type: Number,
      enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("ComponentOperation", schema);
