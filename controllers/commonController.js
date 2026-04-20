
const mongoose = require("mongoose");
const { MachineTypeValue } = require("../utils/enums");

// ================= CREATE =================
exports.create = (Model) => async (req, res) => {
  try {
    console.log("RAW BODY:", req.body);

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body is empty",
      });
    }

    const { MachineTypeValue } = require("../utils/enums");

    const typeKey = req.body.type;

    if (typeKey) {
      const converted = MachineTypeValue[typeKey];

      console.log("CONVERTED TYPE:", converted);

      if (!converted) {
        return res.status(400).json({
          success: false,
          message: "Invalid machine type",
        });
      }

      req.body.type = converted;
    }

    const data = await Model.create(req.body);

    return res.status(201).json({
      success: true,
      data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
// ================= GET ALL =================
exports.getAll =
  (Model, populate = []) =>
  async (req, res) => {
    try {
      let { page = 1, limit = 10 } = req.query;

      page = Math.max(parseInt(page) || 1, 1);
      limit = Math.max(parseInt(limit) || 10, 1);

      let query = Model.find()
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit);

      if (populate.length) {
        query = query.populate(populate);
      }

      const docs = await query;
      const total = await Model.countDocuments();

      const data = docs.map((doc) => {
        const obj = doc.toObject(); 
        return obj;
      });

      res.status(200).json({
        success: true,
        total,
        page,
        limit,
        data,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };
// ================= GET BY ID =================
exports.getById =
  (Model, populate = []) =>
  async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid ID format",
        });
      }

      let query = Model.findById(req.params.id);

      if (populate.length) {
        query = query.populate(populate);
      }

      const doc = await query;

      if (!doc) {
        return res.status(404).json({
          success: false,
          message: "Data not found",
        });
      }

      const data = doc.toObject(); 

      res.status(200).json({
        success: true,
        data,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };

// ================= UPDATE =================
exports.update = (Model) => async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    }

    const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ================= DELETE =================
exports.delete = (Model) => async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    }

    const data = await Model.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
