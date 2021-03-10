const express = require('express');
const router =  express.Router();
const { v4: uuidv4 } = require('uuid');
// Import error handler
const { catchAsyncErrors } = require('../utils');

// ---------------- Routes ----------------

// @desc Gets all data for a single quiz
// @route = GET /api/qiz/:id
router.get('/quiz/:id', (req, res) => res.json({ uuid: uuidv4() }));

// @desc Creates a new quiz JSON file in /db
// @route = POST /api
router.post('/quiz', (req, res) => {
    res.setHeader('Location', `/quiz/${uuidv4()}`);
    return res.status(201).json({ quizUrl: uuidv4() });
});

// Export routes
module.exports = router;