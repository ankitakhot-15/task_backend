// const mongoose = require("mongoose");

// // ================= CREATE =================
// exports.create = (Model) => async (req, res) => {
//   try {
//     // Empty body check
//     if (!req.body || Object.keys(req.body).length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "Request body is empty",
//       });
//     }

//     const data = new Model(req.body);
//     await data.save();

//     res.status(201).json({
//       success: true,
//       data,
//     });
//   } catch (err) {
//     // Validation Error
//     if (err.name === "ValidationError") {
//       return res.status(400).json({
//         success: false,
//         message: err.message,
//       });
//     }

//     // Duplicate Key Error
//     if (err.code === 11000) {
//       return res.status(400).json({
//         success: false,
//         message: "Duplicate value not allowed",
//         field: Object.keys(err.keyValue),
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// // ================= GET ALL =================
// exports.getAll =
//   (Model, populate = []) =>
//   async (req, res) => {
//     try {
//       let { page = 1, limit = 10 } = req.query;

//       page = parseInt(page);
//       limit = parseInt(limit);

//       // Fix invalid values
//       page = isNaN(page) || page < 1 ? 1 : page;
//       limit = isNaN(limit) || limit < 1 ? 10 : limit;

//       let query = Model.find()
//         .sort({ createdAt: -1 }) // latest first
//         .skip((page - 1) * limit)
//         .limit(limit);

//       // Populate with optional select
//       populate.forEach((p) => {
//         query = query.populate(p);
//       });

//       const data = await query;
//       const total = await Model.countDocuments();

//       res.status(200).json({
//         success: true,
//         total,
//         page,
//         limit,
//         data,
//       });
//     } catch (err) {
//       res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };

// // ================= GET BY ID =================
// exports.getById =
//   (Model, populate = []) =>
//   async (req, res) => {
//     try {
//       // Validate ObjectId
//       if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//         return res.status(400).json({
//           success: false,
//           message: "Invalid ID format",
//         });
//       }

//       let query = Model.findById(req.params.id);

//       populate.forEach((p) => {
//         query = query.populate(p);
//       });

//       const data = await query;

//       if (!data) {
//         return res.status(404).json({
//           success: false,
//           message: "Data not found",
//         });
//       }

//       res.status(200).json({
//         success: true,
//         data,
//       });
//     } catch (err) {
//       res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };
// //update api====================
// exports.update = (Model) => async (req, res) => {
//   try {
//     // Validate ID
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid ID format",
//       });
//     }

//     const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!data) {
//       return res.status(404).json({
//         success: false,
//         message: "Data not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
// //==delete api==================
// exports.delete = (Model) => async (req, res) => {
//   try {
//     const mongoose = require("mongoose");

//     // Validate ID
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid ID format",
//       });
//     }

//     const data = await Model.findByIdAndDelete(req.params.id);

//     if (!data) {
//       return res.status(404).json({
//         success: false,
//         message: "Data not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Deleted successfully",
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

const mongoose = require("mongoose");

// ================= CREATE =================
exports.create = (Model) => async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body is empty",
      });
    }

    const data = await Model.create(req.body);

    res.status(201).json({
      success: true,
      data,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }

    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Duplicate value not allowed",
        field: Object.keys(err.keyValue),
      });
    }

    res.status(500).json({
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
        const obj = doc.toObject(); // 🔥 IMPORTANT
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

      const data = doc.toObject(); // 🔥 IMPORTANT

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
