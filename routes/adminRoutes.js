
const express = require('express');
const { getUsers, getDoctors, approveDoctor, deleteUser } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Protect routes & only allow admin role
router.use(protect);
router.use((req, res, next) => {
  if(req.user.role !== 'ADMIN') return res.status(403).json({ message: 'Admin access only' });
  next();
});

router.get('/users', getUsers);
router.get('/doctors', getDoctors);
router.patch('/approve-doctor', approveDoctor);
router.delete('/user/:id', deleteUser);

module.exports = router;