const express = require('express');
const router = express.Router();
const {
  getUserProfile,
  updateUserProfile,
  getUsers,
} = require('../controllers/userController');

const { protect, authorizeRoles } = require('../middleware/authMiddleware');

router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

router.get('/', protect, authorizeRoles('Admin', 'Agent'), getUsers);

module.exports = router;