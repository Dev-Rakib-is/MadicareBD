const express = require('express');
const router = express.Router();
const multer = require('multer');
const { registerPatient, registerDoctor, login, getMe, updateProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
router.post('/register/patient', upload.single('photo'), registerPatient);
router.post('/register/doctor', upload.single('photo'), registerDoctor);
router.post('/login', login);
router.get('/me', protect, getMe);


router.patch('/me', protect, upload.single('photo'), updateProfile);

module.exports = router;
