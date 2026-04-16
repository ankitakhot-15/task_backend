const express = require("express");
const connectDB = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const cors = require("cors");

const app = express();

// ================= MIDDLEWARE =================
app.use(express.json());

// ✅ FIX: CORS for Swagger + frontend access
app.use(cors());

// ================= DB CONNECTION =================
connectDB();

// ================= ROUTES =================
app.use("/api", require("./routes"));

// ================= SWAGGER =================
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ================= SERVER =================
app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});
