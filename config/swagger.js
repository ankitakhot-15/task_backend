const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Manufacturing API",
      version: "1.0.0",
      description:
        "API for Machine, Component, Operation, Customer, Manufacturer & Location Management",
    },

    // 🌐 IMPORTANT: Render production + local support
    servers: [
      {
        url: process.env.BASE_URL || "http://localhost:5000/api",
      },
    ],

    // 📦 GLOBAL RESPONSE SCHEMAS (optional but recommended)
    components: {
      schemas: {
        ApiResponse: {
          type: "object",
          properties: {
            success: { type: "boolean", example: true },
            message: { type: "string", example: "Success" },
            data: { type: "object" },
          },
        },
      },
    },
  },

  // 📁 AUTO SCAN ROUTES FOR SWAGGER COMMENTS
  apis: [path.join(__dirname, "../routes/*.js")],
};

module.exports = swaggerJsdoc(options);
