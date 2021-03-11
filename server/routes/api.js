const express = require('express');
const router =  express.Router();
const { v4: uuidv4 } = require('uuid');
// Import error handler
const { catchAsyncErrors, readJSONFile, writeJSONtoFile } = require('../utils');

// ---------------- Routes ----------------

// @desc Gets all data for a single quiz
// @route = GET /api/qiz/:id
router.get('/quiz/:id', catchAsyncErrors(async (req, res, next) => {
    const quizId = req.params.id;
    const json = await readJSONFile(`./db/quizzes/${quizId}.json`);
    return res.json(json);
}));

// @desc Creates a new quiz JSON file in /db
// @route = POST /api
router.post('/quiz', catchAsyncErrors(async (req, res) => {
    const newQuizId = uuidv4();
    const newQuiz = {...req.body, results: []};
    newQuiz.quizInfo.id = newQuizId;
    const newQuizFile = `./db/quizzes/${newQuizId}.json`;

    await writeJSONtoFile( newQuizFile, newQuiz );

    res.setHeader('Location', `/quiz/${newQuizId}`);
    return res.status(201).json({ quizId: newQuizId });
}));

// Export routes
module.exports = router;