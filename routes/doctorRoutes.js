
const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const Doctor = require("../models/Doctor");


router.get("/", protect, async (req, res) => {
  try {
    const doctors = await Doctor.find().populate("user", "-password");
    res.json({ doctors });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
