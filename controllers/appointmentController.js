
const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');
const User = require('../models/User');

// Create appointment (Patient)
exports.createAppointment = async (req, res) => {
  const { doctorId, date } = req.body;
  const doctor = await Doctor.findById(doctorId);
  if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

  // Optional: Check if slot is available
  const slotTaken = await Appointment.findOne({ doctor: doctorId, date });
  if (slotTaken) return res.status(400).json({ message: 'Slot already booked' });

  const appointment = await Appointment.create({ patient: req.user._id, doctor: doctorId, date });
  res.status(201).json(appointment);
};

// Get patient appointments
exports.getPatientAppointments = async (req, res) => {
  const { status, page = 1, limit = 10 } = req.query;
  const query = { patient: req.user._id };
  if (status) query.status = status;
  const appointments = await Appointment.find(query)
    .populate('doctor', 'name specialization photo_url')
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
  res.json(appointments);
};

// Get doctor appointments
exports.getDoctorAppointments = async (req, res) => {
  const { status, date, page = 1, limit = 10 } = req.query;
  const query = { doctor: req.user._id };
  if (status) query.status = status;
  if (date) query.date = new Date(date);
  const appointments = await Appointment.find(query)
    .populate('patient', 'name email photo_url')
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
  res.json(appointments);
};

// Update appointment status (Doctor/Admin)
exports.updateStatus = async (req, res) => {
  const { appointmentId, status } = req.body;
  const appointment = await Appointment.findById(appointmentId);
  if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
  appointment.status = status;
  await appointment.save();
  res.json(appointment);
};