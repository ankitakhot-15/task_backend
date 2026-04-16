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
 * /manufacturer:
 *   post:
 *     summary: Create manufacturer
 *     tags: [Manufacturer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: ABC Manufacturing
 *     responses:
 *       201:
 *         description: Created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post("/manufacturer", common.create(Manufacturer));

/**
 * @swagger
 * /manufacturer:
 *   get:
 *     summary: Get all manufacturers
 *     tags: [Manufacturer]
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/manufacturer", common.getAll(Manufacturer));

/**
 * @swagger
 * /manufacturer/{id}:
 *   get:
 *     summary: Get manufacturer by ID
 *     tags: [Manufacturer]
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
 * /location:
 *   post:
 *     summary: Create location
 *     tags: [Location]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Pune Plant
 */
router.post("/location", common.create(Location));

/**
 * @swagger
 * /location:
 *   get:
 *     summary: Get all locations
 *     tags: [Location]
 */
router.get("/location", common.getAll(Location));

/**
 * @swagger
 * /location/{id}:
 *   get:
 *     summary: Get location by ID
 *     tags: [Location]
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
 * /machine:
 *   post:
 *     summary: Create machine
 *     tags: [Machine]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: CNC Machine
 *               status:
 *                 type: string
 *                 example: active
 *     responses:
 *       201:
 *         description: Created successfully
 */
router.post("/machine", common.create(Machine));

/**
 * @swagger
 * /machine:
 *   get:
 *     summary: Get all machines
 *     tags: [Machine]
 */
router.get(
  "/machine",
  common.getAll(Machine, ["manufacturerId", "locationId"])
);

/**
 * @swagger
 * /machine/{id}:
 *   get:
 *     summary: Get machine by ID
 *     tags: [Machine]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get(
  "/machine/:id",
  common.getById(Machine, ["manufacturerId", "locationId"])
);

router.put("/machine/:id", common.update(Machine));
router.delete("/machine/:id", common.delete(Machine));


// ================= CUSTOMER =================

/**
 * @swagger
 * /customer:
 *   post:
 *     summary: Create customer
 *     tags: [Customer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 */
router.post("/customer", common.create(Customer));

/**
 * @swagger
 * /customer:
 *   get:
 *     summary: Get all customers
 *     tags: [Customer]
 */
router.get("/customer", common.getAll(Customer));

/**
 * @swagger
 * /customer/{id}:
 *   get:
 *     summary: Get customer by ID
 *     tags: [Customer]
 */
router.get("/customer/:id", common.getById(Customer));

router.put("/customer/:id", common.update(Customer));
router.delete("/customer/:id", common.delete(Customer));


// ================= COMPONENT =================

/**
 * @swagger
 * /component:
 *   post:
 *     summary: Create component
 *     tags: [Component]
 */
router.post("/component", common.create(Component));

/**
 * @swagger
 * /component:
 *   get:
 *     summary: Get all components
 *     tags: [Component]
 */
router.get("/component", common.getAll(Component, ["customerId"]));

/**
 * @swagger
 * /component/{id}:
 *   get:
 *     summary: Get component by ID
 *     tags: [Component]
 */
router.get("/component/:id", common.getById(Component, ["customerId"]));

router.put("/component/:id", common.update(Component));
router.delete("/component/:id", common.delete(Component));


// ================= OPERATION =================

/**
 * @swagger
 * /operation:
 *   post:
 *     summary: Create operation
 *     tags: [Operation]
 */
router.post("/operation", common.create(Operation));

/**
 * @swagger
 * /operation:
 *   get:
 *     summary: Get all operations
 *     tags: [Operation]
 */
router.get(
  "/operation",
  common.getAll(Operation, ["componentId", "machineId"])
);

/**
 * @swagger
 * /operation/{id}:
 *   get:
 *     summary: Get operation by ID
 *     tags: [Operation]
 */
router.get(
  "/operation/:id",
  common.getById(Operation, ["componentId", "machineId"])
);

router.put("/operation/:id", common.update(Operation));
router.delete("/operation/:id", common.delete(Operation));

module.exports = router;