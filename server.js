require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app = express();

// Middleware
app.use(express.json());

// ================= DB CONNECTION =================
connectDB();

// ================= ROOT ROUTE =================
app.get("/", (req, res) => {
  res.json({
    message: "Task Backend is running 🚀",
    status: "OK",
    api: "/api",
    docs: "/api-docs",
  });
});

// ================= ROUTES =================
app.use("/api", require("./routes"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ================= ERROR HANDLING (optional but recommended) =================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ================= START SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
