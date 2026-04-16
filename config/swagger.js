const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Manufacturing API",
      version: "1.0.0",
      description:
        "Machine, Component, Operation, Customer, Manufacturer & Location API",
    },

    servers: [
      {
        url: process.env.BASE_URL || "http://localhost:5000/api",
      },
    ],

    // ✅ IMPORTANT FIX (THIS WAS MISSING)
    components: {
      schemas: {
        Manufacturer: {
          type: "object",
          required: ["name"],
          properties: {
            name: { type: "string", example: "ABC Industries" },
          },
        },

        Location: {
          type: "object",
          required: ["name"],
          properties: {
            name: { type: "string", example: "Pune Plant" },
            latitude: { type: "number", example: 18.52 },
            longitude: { type: "number", example: 73.85 },
          },
        },

        Machine: {
          type: "object",
          required: [
            "machineName",
            "serialNumber",
            "manufacturerId",
            "type",
            "locationId",
          ],
          properties: {
            machineName: { type: "string" },
            serialNumber: { type: "string" },
            manufacturerId: { type: "string" },
            model: { type: "string" },
            year: { type: "number" },
            type: { type: "number" },
            locationId: { type: "string" },
          },
        },

        Customer: {
          type: "object",
          required: ["name"],
          properties: {
            name: { type: "string", example: "John Doe" },
          },
        },

        Component: {
          type: "object",
          required: ["customerId", "componentName", "partNo"],
          properties: {
            customerId: { type: "string" },
            componentName: { type: "string" },
            partNo: { type: "string" },
            ecn: { type: "string" },
          },
        },

        Operation: {
          type: "object",
          required: [
            "componentId",
            "machineId",
            "operationCode",
            "operationName",
            "operationType",
          ],
          properties: {
            componentId: { type: "string" },
            machineId: { type: "string" },
            operationCode: { type: "string" },
            operationName: { type: "string" },
            operationDescription: { type: "string" },
            operationType: { type: "number" },
          },
        },

        ApiResponse: {
          type: "object",
          properties: {
            success: { type: "boolean" },
            message: { type: "string" },
            data: { type: "object" },
          },
        },
      },
    },
  },

  apis: [path.join(__dirname, "../routes/*.js")],
};

module.exports = swaggerJsdoc(options);
