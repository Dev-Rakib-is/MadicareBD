
const express = require('express');
const { addReview, getDoctorReviews } = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();
router.use(protect);

router.post('/:id', addReview); 
router.get('/:id', getDoctorReviews); 

module.exports = router;