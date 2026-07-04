const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
    select: false, 
  },
  role: {
    type: String,
    enum: ['Customer', 'Agent', 'Admin'],
    default: 'Customer',
  },
  phone: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
  },
  customFields: {
    type: Map,
    of: String, 
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);