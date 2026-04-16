const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Industrial Manufacturing API",
      version: "1.0.0",
      description:
        "API system for Machines, Components, Operations, Customers, Manufacturer & Location",
    },

    // 🌐 PRODUCTION + LOCAL SUPPORT
    servers: [
      {
        url:
          process.env.BASE_URL ||
          "https://task-backend-4-5f76.onrender.com/api",
      },
    ],

    // 📦 GLOBAL SCHEMAS
    components: {
      schemas: {
        // ================= MACHINE =================
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
            machineName: {
              type: "string",
              example: "CNC Turning Center",
            },

            serialNumber: {
              type: "string",
              example: "CNC-1001",
            },

            manufacturerId: {
              type: "string",
              description: "MongoDB ObjectId of Manufacturer",
              example: "65a1b2c3d4e5f6a7b8c9d0e1",
            },

            model: {
              type: "string",
              example: "TX-200",
            },

            year: {
              type: "number",
              example: 2023,
            },

            type: {
              type: "number",
              description: "1=CNC, 2=VMC, 3=HMC, 4=HBM, 5=VTL, 6=5-Axis",
              example: 1,
            },

            locationId: {
              type: "string",
              description: "MongoDB ObjectId of Location",
              example: "65a1b2c3d4e5f6a7b8c9d0e2",
            },
          },
        },

        // ================= MANUFACTURER =================
        Manufacturer: {
          type: "object",
          required: ["name"],
          properties: {
            name: {
              type: "string",
              example: "ABC Manufacturing",
            },
          },
        },

        // ================= LOCATION =================
        Location: {
          type: "object",
          required: ["name", "latitude", "longitude"],
          properties: {
            name: {
              type: "string",
              example: "Pune Plant",
            },
            latitude: {
              type: "number",
              example: 18.5204,
            },
            longitude: {
              type: "number",
              example: 73.8567,
            },
          },
        },

        // ================= CUSTOMER =================
        Customer: {
          type: "object",
          required: ["name"],
          properties: {
            name: {
              type: "string",
              example: "John Doe",
            },
          },
        },

        // ================= COMPONENT =================
        Component: {
          type: "object",
          required: ["customerId", "componentName", "partNo"],
          properties: {
            customerId: {
              type: "string",
              example: "65a1b2c3d4e5f6a7b8c9d0e3",
            },
            componentName: {
              type: "string",
              example: "Gear Box",
            },
            partNo: {
              type: "string",
              example: "P-123",
            },
            ecn: {
              type: "string",
              example: "ECN-001",
            },
          },
        },

        // ================= OPERATION =================
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
            componentId: {
              type: "string",
              example: "65a1b2c3d4e5f6a7b8c9d0e3",
            },

            machineId: {
              type: "string",
              example: "65a1b2c3d4e5f6a7b8c9d0e4",
            },

            operationCode: {
              type: "string",
              example: "OP-001",
            },

            operationName: {
              type: "string",
              example: "Turning",
            },

            operationDescription: {
              type: "string",
              example: "Turning operation on CNC machine",
            },

            operationType: {
              type: "number",
              description:
                "1=Turning, 2=Milling, 3=Drilling, 4=Chamfering, 5=Tapping, 6=Threading, 7=Boring, 8=Knurling, 9=Honing, 10=Buffing",
              example: 1,
            },
          },
        },

        // ================= STANDARD RESPONSE =================
        ApiResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: true,
            },
            message: {
              type: "string",
              example: "Success",
            },
            data: {
              type: "object",
            },
          },
        },
      },
    },
  },

  // 📁 SCAN ROUTES FOR DOCS
  apis: [path.join(__dirname, "../routes/*.js")],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
