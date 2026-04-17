const { MachineTypeValue } = require("../utils/enums");

exports.convertMachineType = (req, res, next) => {
  if (req.body?.type) {
    const value = MachineTypeValue[req.body.type];

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Invalid machine type",
      });
    }

    req.body.type = value;
  }

  next();
};