const Message = require('../models/Message');
const Complaint = require('../models/Complaint');

exports.addMessage = async (req, res) => {
  try {
    const { messageText, isInternalNote } = req.body;
    const complaintId = req.params.complaintId;

    const complaint = await Complaint.findById(complaintId);
    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }

    const message = await Message.create({
      complaint: complaintId,
      sender: req.user._id,
      messageText,
      isInternalNote: req.user.role !== 'Customer' ? isInternalNote : false,
    });

    const populatedMessage = await message.populate('sender', 'name role');

    res.status(201).json(populatedMessage);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const complaintId = req.params.complaintId;

    let query = { complaint: complaintId };

    if (req.user.role === 'Customer') {
      query.isInternalNote = false;
    }

    const messages = await Message.find(query)
      .populate('sender', 'name role')
      .sort({ createdAt: 1 }); 

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};