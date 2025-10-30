
const Doctor = require('../models/Doctor');
const Review = require('../models/Review');

// Get all doctors with filters and pagination
exports.getDoctors = async (req, res) => {
  const { page = 1, limit = 10, search, specialization } = req.query;
  const query = {};
  if (search) query.name = { $regex: search, $options: 'i' };
  if (specialization) query.specialization = specialization;

  const doctors = await Doctor.find(query)
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

  res.json(doctors);
};

// Get top-rated doctors
exports.getTopRatedDoctors = async (req, res) => {
  const doctors = await Doctor.find().sort({ rating: -1 }).limit(5);
  res.json(doctors);
};

// Favorite doctor (Patient)
exports.favoriteDoctor = async (req, res) => {
  const doctorId = req.params.id;
  const patient = req.user;
  if (!patient.favorites.includes(doctorId)) {
    patient.favorites.push(doctorId);
    await patient.save();
  }
  res.json({ message: 'Doctor added to favorites', favorites: patient.favorites });
};