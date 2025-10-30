
const Review = require('../models/Review');
const Doctor = require('../models/Doctor');

// Add review for doctor (Patient)
exports.addReview = async (req, res) => {
  const doctorId = req.params.id;
  const { rating, comment } = req.body;
  const review = await Review.create({ patient: req.user._id, doctor: doctorId, rating, comment });

  // Update doctor average rating
  const reviews = await Review.find({ doctor: doctorId });
  const avgRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
  const doctor = await Doctor.findById(doctorId);
  doctor.rating = avgRating;
  await doctor.save();

  res.status(201).json(review);
};

// Get reviews for a doctor
exports.getDoctorReviews = async (req, res) => {
  const doctorId = req.params.id;
  const reviews = await Review.find({ doctor: doctorId }).populate('patient', 'name photo_url');
  res.json(reviews);
};