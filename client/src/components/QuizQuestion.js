import React from 'react';
// Components
import SingleAnswerQuestion from './SingleAnswerQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
// Helpers
import { formatInputString } from '../helpers';

export default function QuizQuestion({ q, addAnswer }) {

    const answerQuestion = (answer) => {
        const correctAnswer = answer === formatInputString(q.answer) ? 'correct' : 'incorrect';
        addAnswer(correctAnswer);
    };

    const skipQuestion = () => {
        addAnswer('incorrect');
    };

    return (
        <div className="quiz-question-container">
            {q.type === 'multiple choice' && <MultipleChoiceQuestion
                {...q}
                answerQuestion={answerQuestion}
                skipQuestion={skipQuestion}
            />}
            {q.type === 'single answer' && <SingleAnswerQuestion
                {...q}
                answerQuestion={answerQuestion}
                skipQuestion={skipQuestion}
            />}
        </div>
    )
}
