const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  complaint: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Complaint',
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  messageText: {
    type: String,
    required: [true, 'Message cannot be empty'],
  },
  isInternalNote: {
    type: Boolean,
    default: false, 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Message', messageSchema);
