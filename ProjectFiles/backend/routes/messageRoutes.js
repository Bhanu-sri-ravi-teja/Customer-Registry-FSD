const express = require('express');
const router = express.Router();
const { addMessage, getMessages } = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware');

router.route('/:complaintId')
  .get(protect, getMessages)
  .post(protect, addMessage);

module.exports = router;