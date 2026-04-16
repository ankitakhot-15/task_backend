const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Manufacturing API",
      version: "1.0.0",
      description: "API for Machine & Component Management",
    },

    servers: [
      {
        url: process.env.BASE_URL || "http://localhost:5000/api",
      },
    ],
  },

  // ✅ FIXED PATH (IMPORTANT)
  apis: [path.join(__dirname, "../routes/*.js")],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
