const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  ticketId: {
    type: String,
    unique: true,
    required: true,
    default: () => `TKT-${Math.random().toString(36).substr(2, 6).toUpperCase()}`
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  assignedAgent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null, 
  },
  type: {
    type: String,
    enum: ['Inquiry', 'Complaint', 'Feedback', 'Request'],
    required: true,
  },
  title: {
    type: String,
    required: [true, 'Please add a title for the issue'],
  },
  description: {
    type: String,
    required: [true, 'Please provide issue details'],
  },
  status: {
    type: String,
    enum: ['Open', 'Assigned', 'In Progress', 'Resolved', 'Closed'],
    default: 'Open',
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High', 'Critical'],
    default: 'Medium',
  },
  resolutionNotes: {
    type: String,
  },
  customerRating: {
    type: Number,
    min: 1,
    max: 5,
  },
  customerFeedback: {
    type: String,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Complaint', complaintSchema);