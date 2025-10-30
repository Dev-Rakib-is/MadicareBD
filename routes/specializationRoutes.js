const express = require('express');
const router = express.Router();

const specializations = [
  "Cardiologist",
  "Dentist",
  "Neurologist",
  "Dermatologist",
  "Gynecologist",
];

router.get("/", (req, res) => {
  res.json(specializations);
});

module.exports = router;
