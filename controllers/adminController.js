const User = require('../models/User');
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');


// Get all users
exports.getUsers = async (req, res) => {
const users = await User.find().select('-password');
res.json(users);
};


// Get all doctors
exports.getDoctors = async (req, res) => {
const doctors = await Doctor.find().populate('user', '-password');
res.json(doctors);
};


// Approve doctor
exports.approveDoctor = async (req, res) => {
const { doctorId } = req.body;
const doctor = await Doctor.findById(doctorId);
if(!doctor) return res.status(404).json({ message: 'Doctor not found' });
doctor.approved = true;
await doctor.save();
res.json({ message: 'Doctor approved', doctor });
};


// Delete user
exports.deleteUser = async (req, res) => {
const user = await User.findById(req.params.id);
if(!user) return res.status(404).json({ message: 'User not found' });
await user.remove();
res.json({ message: 'User deleted' });
};