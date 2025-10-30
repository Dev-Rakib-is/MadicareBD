const mongoose = require('mongoose');
const doctorSchema = new mongoose.Schema({
name: { type: String, required: true },
specialization: { type: String, required: true },
photo_url: String,
rating: { type: Number, default: 0 },
available_slots: [Date],
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
},{ timestamps: true });


module.exports = mongoose.model('Doctor', doctorSchema);
