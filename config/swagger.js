const swaggerJsdoc = require("swagger-jsdoc");

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
        url: "http://localhost:5000/api",
      },
    ],
  },
  apis: ["./routes/*.js"], // route files
};

const specs = swaggerJsdoc(options);

module.exports = specs;