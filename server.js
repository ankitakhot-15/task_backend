require("dotenv").config(); // MUST be first

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app = express();

// ================= MIDDLEWARE =================
app.use(cors()); 
app.use(express.json());

// ================= DB CONNECTION =================
connectDB();

// ================= HEALTH CHECK (IMPORTANT FOR RENDER) =================
app.get("/", (req, res) => {
  res.send("API is running successfully ");
});

// ================= ROUTES =================
app.use("/api", require("./routes"));

// ================= SWAGGER =================
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ================= SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
