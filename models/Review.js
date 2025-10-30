const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
rating: { type: Number, required: true },
comment: String
},{ timestamps: true });
module.exports = mongoose.model('Review', reviewSchema);