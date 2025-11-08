const express = require("express");
const router = express.Router();

const specializations = [
  { _id: 1, name: "Cardiologist" },
  { _id: 2, name: "Dentist" },
  { _id: 3, name: "Neurologist" },
  { _id: 4, name: "Dermatologist" },
  { _id: 5, name: "Gynecologist" },
  { _id: 6, name: "Pediatrician" },
  { _id: 7, name: "Psychiatrist" },
  { _id: 8, name: "Radiologist" },
  { _id: 9, name: "Surgeon" },
  { _id: 10, name: "General Physician" },
  { _id: 11, name: "Orthopedic" },
  { _id: 12, name: "Ophthalmologist (Eye Specialist)" },
  { _id: 13, name: "ENT (Ear, Nose, Throat)" },
  { _id: 14, name: "Urologist" },
  { _id: 14, name: "Endocrinologist" },
  { _id: 14, name: "Gastroenterologist" },
  { _id: 14, name: "Pulmonologist (Lung Specialist)" },
  { _id: 14, name: "Nephrologist (Kidney Specialist)" },
  { _id: 14, name: "Oncologist (Cancer Specialist)" },
  { _id: 14, name: "Rheumatologist" },
];

router.get("/", (req, res) => {
  res.json(specializations);
});

module.exports = router;








































