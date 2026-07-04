const express = require('express');
const router = express.Router();
const { 
    createComplaint, 
    getMyComplaints,
    getAllComplaints,
    assignAgent,
    getAssignedComplaints,
    updateComplaintStatus
} = require('../controllers/complaintController');

const { protect, authorizeRoles } = require('../middleware/authMiddleware');

router.post('/', protect, authorizeRoles('Customer'), createComplaint);
router.get('/', protect, authorizeRoles('Customer'), getMyComplaints);

router.get('/all', protect, authorizeRoles('Admin'), getAllComplaints);
router.put('/:id/assign', protect, authorizeRoles('Admin'), assignAgent);

router.get('/assigned', protect, authorizeRoles('Agent'), getAssignedComplaints);

router.put('/:id/status', protect, authorizeRoles('Agent', 'Admin'), updateComplaintStatus);

module.exports = router;