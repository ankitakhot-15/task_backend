const express = require("express");
const router = express.Router();
const { convertMachineType } = require("../middleware/machineMiddleware");

const common = require("../controllers/commonController");

const Machine = require("../models/machine");
const Manufacturer = require("../models/machinemanufacture");
const Location = require("../models/location");
const Customer = require("../models/customer");
const Component = require("../models/component");
const Operation = require("../models/componentOperation");

// ================= MANUFACTURER =================

/**
 * @swagger
 * /api/manufacturer:
 *   post:
 *     summary: Create Manufacturer
 *     tags: [Manufacturer]
 */
router.post("/manufacturer", common.create(Manufacturer));

/**
 * @swagger
 * /api/manufacturer:
 *   get:
 *     summary: Get all Manufacturers
 *     tags: [Manufacturer]
 */
router.get("/manufacturer", common.getAll(Manufacturer));

/**
 * @swagger
 * /api/manufacturer/{id}:
 *   get:
 *     summary: Get Manufacturer by ID
 *     tags: [Manufacturer]
 */
router.get("/manufacturer/:id", common.getById(Manufacturer));

router.put("/manufacturer/:id", common.update(Manufacturer));
router.delete("/manufacturer/:id", common.delete(Manufacturer));

// ================= LOCATION =================

/**
 * @swagger
 * /api/location:
 *   post:
 *     summary: Create Location
 *     tags: [Location]
 */
router.post("/location", common.create(Location));

/**
 * @swagger
 * /api/location:
 *   get:
 *     summary: Get all Locations
 *     tags: [Location]
 */
router.get("/location", common.getAll(Location));

router.get("/location/:id", common.getById(Location));
router.put("/location/:id", common.update(Location));
router.delete("/location/:id", common.delete(Location));

// ================= MACHINE =================

/**
 * @swagger
 * /api/machine:
 *   post:
 *     summary: Create Machine
 *     tags: [Machine]
 */
router.post("/machine", convertMachineType, common.create(Machine));

/**
 * @swagger
 * /api/machine:
 *   get:
 *     summary: Get all Machines
 *     tags: [Machine]
 */
router.get(
  "/machine",
  common.getAll(Machine, ["manufacturerId", "locationId"]),
);

/**
 * @swagger
 * /api/machine/{id}:
 *   get:
 *     summary: Get Machine by ID
 *     tags: [Machine]
 */
router.get(
  "/machine/:id",
  common.getById(Machine, ["manufacturerId", "locationId"]),
);

/**
 * @swagger
 * /api/machine/{id}:
 *   put:
 *     summary: Update Machine
 *     tags: [Machine]
 */
router.put("/machine/:id", common.update(Machine));

/**
 * @swagger
 * /api/machine/{id}:
 *   delete:
 *     summary: Delete Machine
 *     tags: [Machine]
 */
router.delete("/machine/:id", common.delete(Machine));

module.exports = router;
// ================= CUSTOMER =================

/**
 * @swagger
 * /api/customer:
 *   post:
 *     summary: Create Customer
 *     tags: [Customer]
 */
router.post("/customer", common.create(Customer));

/**
 * @swagger
 * /api/customer:
 *   get:
 *     summary: Get all Customers
 *     tags: [Customer]
 */
router.get("/customer", common.getAll(Customer));

router.get("/customer/:id", common.getById(Customer));
router.put("/customer/:id", common.update(Customer));
router.delete("/customer/:id", common.delete(Customer));

// ================= COMPONENT =================

/**
 * @swagger
 * /api/component:
 *   post:
 *     summary: Create Component
 *     tags: [Component]
 */
router.post("/component", common.create(Component));

router.get("/component", common.getAll(Component, ["customerId"]));
router.get("/component/:id", common.getById(Component, ["customerId"]));

router.put("/component/:id", common.update(Component));
router.delete("/component/:id", common.delete(Component));

// ================= OPERATION =================

/**
 * @swagger
 * /api/operation:
 *   post:
 *     summary: Create Operation
 *     tags: [Operation]
 */
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
