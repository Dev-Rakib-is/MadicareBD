// controllers/authController.js
const User = require('../models/User');
const Doctor = require('../models/Doctor');
const jwt = require('jsonwebtoken');
const { uploadImage } = require('../utils/cloudinary');

// Generate JWT token
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

// Patient registration
const registerPatient = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let photo_url = '';

    if (req.file) {
      const result = await uploadImage(req.file.path || req.file.buffer, 'patients');
      photo_url = result.secure_url;
    }

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ name, email, password, role: 'PATIENT', photo_url });
    res.status(201).json({ token: generateToken(user._id), user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Doctor registration
const registerDoctor = async (req, res) => {
  try {
    const { name, email, password, specialization } = req.body;
    let photo_url = '';

    if (req.file) {
      const result = await uploadImage(req.file.path || req.file.buffer, 'doctors');
      photo_url = result.secure_url;
    }

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ name, email, password, role: 'DOCTOR', photo_url });
    await Doctor.create({ name, specialization, photo_url, user: user._id, approved: false });

    res.status(201).json({ token: generateToken(user._id), user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const match = await user.matchPassword(password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });

    res.json({ token: generateToken(user._id), user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get logged-in user info
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { registerPatient, registerDoctor, login, getMe };
