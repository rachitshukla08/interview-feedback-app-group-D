// routes/interviewsRoutes.js
const express = require('express');
const router = express.Router();
//const Interview = require('../models/interviewModel');
const interviewController = require('../controllers/interviewController');
//const { authenticateAdmin } = require('../middleware/authenticate');

// API endpoint to fetch interview records with pagination
//router.get('/interviews', authenticateAdmin ,interviewController.getAllInterviewsWithPagination);
router.get('/interviews', interviewController.getAllInterviews);
router.post('/interviews', interviewController.createInterview);
router.get('/interviews/:id', interviewController.getInterviewById);
router.put('/interviews/:id', interviewController.updateInterview);
router.delete('/interviews/:id', interviewController.deleteInterview);

module.exports = router;
