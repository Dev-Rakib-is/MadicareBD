const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema({
patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
date: { type: Date, required: true },
status: { type: String, enum: ['PENDING','ACCEPTED','REJECTED','COMPLETE','CANCELLED'], default: 'PENDING' }
},{ timestamps: true });
module.exports = mongoose.model('Appointment', appointmentSchema);
