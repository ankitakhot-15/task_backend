const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Manufacturing API",
      version: "1.0.0",
      description: "Machine, Component, Operation API",
    },

    servers: [
      {
        url: process.env.BASE_URL || "http://localhost:5000",
      },
    ],

    components: {
      schemas: {
        Manufacturer: {
          type: "object",
          required: ["name"],
          properties: {
            name: { type: "string" },
          },
        },

        Location: {
          type: "object",
          required: ["name"],
          properties: {
            name: { type: "string" },
            latitude: { type: "number" },
            longitude: { type: "number" },
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
      },
    },
  },

  apis: [path.join(__dirname, "../routes/*.js")],
};

module.exports = swaggerJsdoc(options);
