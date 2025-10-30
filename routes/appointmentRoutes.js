const express = require('express');
const { createAppointment, getPatientAppointments, getDoctorAppointments, updateStatus } = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();
router.use(protect);

// Patient routes
router.post('/', createAppointment);
router.get('/patient', getPatientAppointments);

// Doctor routes
router.get('/doctor', getDoctorAppointments);
router.patch('/update-status', updateStatus);

module.exports = router;