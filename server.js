
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const doctorRoutes = require("./routes/doctorRoutes");

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["https://madicarebd.vercel.app", "http://localhost:5173"],
    credentials: true,
  })
);

// Routes
app.use("/api/v1/doctors", doctorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
