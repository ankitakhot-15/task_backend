const express = require("express");
const connectDB = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app = express();

// Middleware
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use("/api", require("./routes"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ✅ FIX: bind to 0.0.0.0 so emulator/device can access
app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});
