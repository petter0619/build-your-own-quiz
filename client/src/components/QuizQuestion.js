import React from 'react';
// Components
import SingleAnswerQuestion from './SingleAnswerQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';

export default function QuizQuestion({ q, nextQuestion, addAnswer }) {

    const answerQuestion = (answer) => {
        addAnswer(answer);
        nextQuestion();
    };

    const skipQuestion = () => {
        addAnswer('');
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
