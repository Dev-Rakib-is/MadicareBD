
const express = require('express');
const { getDoctors, getTopRatedDoctors, favoriteDoctor } = require('../controllers/doctorController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();
router.use(protect);

router.get('/', getDoctors);
router.get('/top-rated', getTopRatedDoctors);
router.post('/:id/favorite', favoriteDoctor);

module.exports = router;