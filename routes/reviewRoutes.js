
const express = require('express');
const { addReview, getDoctorReviews } = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();
router.use(protect);

router.post('/:id', addReview); // Add review for doctor
router.get('/:id', getDoctorReviews); // Get reviews for doctor

module.exports = router;