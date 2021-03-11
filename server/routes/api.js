const express = require('express');
const router =  express.Router();
const { v4: uuidv4 } = require('uuid');
// Import error handler
const { catchAsyncErrors, readJSONFile, writeJSONtoFile } = require('../utils');

// ---------------- Routes ----------------

// @desc Gets all data for a single quiz
// @route = GET /api/quiz/:id
router.get('/quiz/:id', catchAsyncErrors(async (req, res, next) => {
    const quizId = req.params.id;
    const json = await readJSONFile(`./db/quizzes/${quizId}.json`);
    return res.json(json);
}));

// @desc Creates a new quiz JSON file in /db
// @route = POST /api/quiz
router.post('/quiz', catchAsyncErrors(async (req, res) => {
    const newQuizId = uuidv4();
    const newQuiz = {...req.body, results: []};
    newQuiz.quizInfo.id = newQuizId;
    newQuiz.quizInfo.questionCount = newQuiz.questionsAndAnswers.length;
    const newQuizFile = `./db/quizzes/${newQuizId}.json`;

    await writeJSONtoFile( newQuizFile, newQuiz );

    res.setHeader('Location', `/quiz/${newQuizId}`);
    return res.status(201).json({ quizId: newQuizId });
}));

// @desc Update quiz
// @route = PUT /api
router.put('/quiz/:id/results', catchAsyncErrors(async (req, res) => {
    const quizId = req.params.id;
    const json = await readJSONFile(`./db/quizzes/${quizId}.json`);
    const resultsCopy = [...json.results];
    resultsCopy.push(req.body);
    json.results = resultsCopy;

    await writeJSONtoFile( `./db/quizzes/${quizId}.json`, json );

    return res.status(200).json(req.body);
}));

// Export routes
module.exports = router;