// const express = require("express");
// const router = express.Router();

// const common = require("../controllers/commonController");

// const Machine = require("../models/machine");
// const Manufacturer = require("../models/machinemanufacture");
// const Location = require("../models/location");
// const Customer = require("../models/customer");
// const Component = require("../models/component");
// const Operation = require("../models/componentOperation");

// // ================= Manufacturer =================
// router.post("/manufacturer", common.create(Manufacturer));
// router.get("/manufacturer", common.getAll(Manufacturer));
// router.get("/manufacturer/:id", common.getById(Manufacturer));

// // ================= Location =================
// router.post("/location", common.create(Location));
// router.get("/location", common.getAll(Location));
// router.get("/location/:id", common.getById(Location));

// // ================= Machine =================
// router.post("/machine", common.create(Machine));
// router.get(
//   "/machine",
//   common.getAll(Machine, ["manufacturerId", "locationId"]),
// );
// router.get(
//   "/machine/:id",
//   common.getById(Machine, ["manufacturerId", "locationId"]),
// );

// // ================= Customer =================
// router.post("/customer", common.create(Customer));
// router.get("/customer", common.getAll(Customer));
// router.get("/customer/:id", common.getById(Customer));

// // ================= Component =================
// router.post("/component", common.create(Component));
// router.get("/component", common.getAll(Component, ["customerId"]));
// router.get("/component/:id", common.getById(Component, ["customerId"]));

// // ================= Operation =================
// router.post("/operation", common.create(Operation));
// router.get(
//   "/operation",
//   common.getAll(Operation, ["componentId", "machineId"]),
// );
// router.get(
//   "/operation/:id",
//   common.getById(Operation, ["componentId", "machineId"]),
// );

// // Machine
// router.put("/machine/:id", common.update(Machine));
// router.delete("/machine/:id", common.delete(Machine));

// // Manufacturer
// router.put("/manufacturer/:id", common.update(Manufacturer));
// router.delete("/manufacturer/:id", common.delete(Manufacturer));

// // Location
// router.put("/location/:id", common.update(Location));
// router.delete("/location/:id", common.delete(Location));

// // Customer
// router.put("/customer/:id", common.update(Customer));
// router.delete("/customer/:id", common.delete(Customer));

// // Component
// router.put("/component/:id", common.update(Component));
// router.delete("/component/:id", common.delete(Component));

// // Operation
// router.put("/operation/:id", common.update(Operation));
// router.delete("/operation/:id", common.delete(Operation));
// module.exports = router;
const express = require("express");
const router = express.Router();

const common = require("../controllers/commonController");

// Models
const Machine = require("../models/machine");
const Manufacturer = require("../models/machinemanufacture");
const Location = require("../models/location");
const Customer = require("../models/customer");
const Component = require("../models/component");
const Operation = require("../models/componentOperation");

/* =========================
   MANUFACTURER
========================= */

/**
 * @swagger
 * /api/manufacturer:
 *   post:
 *     summary: Create Manufacturer
 *     tags: [Manufacturer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Manufacturer'
 */
router.post("/manufacturer", common.create(Manufacturer));

router.get("/manufacturer", common.getAll(Manufacturer));
router.get("/manufacturer/:id", common.getById(Manufacturer));

router.put("/manufacturer/:id", common.update(Manufacturer));
router.delete("/manufacturer/:id", common.delete(Manufacturer));

/* =========================
   LOCATION
========================= */

router.post("/location", common.create(Location));
router.get("/location", common.getAll(Location));
router.get("/location/:id", common.getById(Location));

router.put("/location/:id", common.update(Location));
router.delete("/location/:id", common.delete(Location));

/* =========================
   MACHINE
========================= */

router.post("/machine", common.create(Machine));

router.get(
  "/machine",
  common.getAll(Machine, ["manufacturerId", "locationId"]),
);

router.get(
  "/machine/:id",
  common.getById(Machine, ["manufacturerId", "locationId"]),
);

router.put("/machine/:id", common.update(Machine));
router.delete("/machine/:id", common.delete(Machine));

/* =========================
   CUSTOMER
========================= */

router.post("/customer", common.create(Customer));
router.get("/customer", common.getAll(Customer));
router.get("/customer/:id", common.getById(Customer));

router.put("/customer/:id", common.update(Customer));
router.delete("/customer/:id", common.delete(Customer));

/* =========================
   COMPONENT
========================= */

router.post("/component", common.create(Component));

router.get("/component", common.getAll(Component, ["customerId"]));

router.get("/component/:id", common.getById(Component, ["customerId"]));

router.put("/component/:id", common.update(Component));
router.delete("/component/:id", common.delete(Component));

/* =========================
   OPERATION
========================= */

router.post("/operation", common.create(Operation));

router.get(
  "/operation",
  common.getAll(Operation, ["componentId", "machineId"]),
);

router.get(
  "/operation/:id",
  common.getById(Operation, ["componentId", "machineId"]),
);

router.put("/operation/:id", common.update(Operation));
router.delete("/operation/:id", common.delete(Operation));

module.exports = router;
