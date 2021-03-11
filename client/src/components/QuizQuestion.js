import React from 'react';
// Components
import SingleAnswerQuestion from './SingleAnswerQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
// Helpers
import { formatInputString } from '../helpers';

export default function QuizQuestion({ q, nextQuestion, addAnswer }) {

    const answerQuestion = (answer) => {
        const correctAnswer = answer === formatInputString(q.answer) ? 'correct' : 'incorret';
        addAnswer(correctAnswer);
        nextQuestion();
    };

    const skipQuestion = () => {
        addAnswer('incorrect');
        nextQuestion();
    };

    return (
        <div>
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
