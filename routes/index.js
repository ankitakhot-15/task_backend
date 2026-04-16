const express = require("express");
const router = express.Router();

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
 *     summary: Create manufacturer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 */
router.post("/manufacturer", common.create(Manufacturer));

/**
 * @swagger
 * /api/manufacturer:
 *   get:
 *     summary: Get all manufacturers
 */
router.get("/manufacturer", common.getAll(Manufacturer));

/**
 * @swagger
 * /api/manufacturer/{id}:
 *   get:
 *     summary: Get manufacturer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get("/manufacturer/:id", common.getById(Manufacturer));

router.put("/manufacturer/:id", common.update(Manufacturer));
router.delete("/manufacturer/:id", common.delete(Manufacturer));

// ================= LOCATION =================

/**
 * @swagger
 * /api/location:
 *   post:
 *     summary: Create location
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 */
router.post("/location", common.create(Location));

/**
 * @swagger
 * /api/location:
 *   get:
 *     summary: Get all locations
 */
router.get("/location", common.getAll(Location));

/**
 * @swagger
 * /api/location/{id}:
 *   get:
 *     summary: Get location by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get("/location/:id", common.getById(Location));

router.put("/location/:id", common.update(Location));
router.delete("/location/:id", common.delete(Location));

// ================= MACHINE =================

/**
 * @swagger
 * /api/machine:
 *   post:
 *     summary: Create machine
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 */
router.post("/machine", common.create(Machine));

/**
 * @swagger
 * /api/machine:
 *   get:
 *     summary: Get all machines
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 */
router.get(
  "/machine",
  common.getAll(Machine, ["manufacturerId", "locationId"]),
);

/**
 * @swagger
 * /api/machine/{id}:
 *   get:
 *     summary: Get machine by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get(
  "/machine/:id",
  common.getById(Machine, ["manufacturerId", "locationId"]),
);

router.put("/machine/:id", common.update(Machine));
router.delete("/machine/:id", common.delete(Machine));

// ================= CUSTOMER =================

/**
 * @swagger
 * /api/customer:
 *   post:
 *     summary: Create customer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 */
router.post("/customer", common.create(Customer));

/**
 * @swagger
 * /api/customer:
 *   get:
 *     summary: Get all customers
 */
router.get("/customer", common.getAll(Customer));

/**
 * @swagger
 * /api/customer/{id}:
 *   get:
 *     summary: Get customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get("/customer/:id", common.getById(Customer));

router.put("/customer/:id", common.update(Customer));
router.delete("/customer/:id", common.delete(Customer));

// ================= COMPONENT =================

/**
 * @swagger
 * /api/component:
 *   post:
 *     summary: Create component
 */
router.post("/component", common.create(Component));

/**
 * @swagger
 * /api/component:
 *   get:
 *     summary: Get all components
 */
router.get("/component", common.getAll(Component, ["customerId"]));

/**
 * @swagger
 * /api/component/{id}:
 *   get:
 *     summary: Get component by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get("/component/:id", common.getById(Component, ["customerId"]));

router.put("/component/:id", common.update(Component));
router.delete("/component/:id", common.delete(Component));

// ================= OPERATION =================

/**
 * @swagger
 * /api/operation:
 *   post:
 *     summary: Create operation
 */
router.post("/operation", common.create(Operation));

/**
 * @swagger
 * /api/operation:
 *   get:
 *     summary: Get all operations
 */
router.get(
  "/operation",
  common.getAll(Operation, ["componentId", "machineId"]),
);

/**
 * @swagger
 * /api/operation/{id}:
 *   get:
 *     summary: Get operation by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get(
  "/operation/:id",
  common.getById(Operation, ["componentId", "machineId"]),
);

router.put("/operation/:id", common.update(Operation));
router.delete("/operation/:id", common.delete(Operation));

// ================= EXPORT =================
module.exports = router;
