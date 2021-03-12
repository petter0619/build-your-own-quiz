import React from 'react';
import { formatInputString } from '../helpers';

export default function SingleAnswerQuestion({question, answerQuestion, skipQuestion }) {
    const handleSubmit = e => {
        e.preventDefault();
        const ans = formatInputString(e.target.answer.value);
        answerQuestion(ans);
        e.target.reset();
    }
    
    return (
        <form onSubmit={handleSubmit} className="quiz-question-form">
            <p>{question}</p>
            <input type="text" name="answer" required className="form-control" placeholder="The answer is..."/>
            <button type="button" onClick={skipQuestion} className="btn btn-outline-danger">Skip</button>
            <button type="submit" className="btn btn-success">Answer</button>
        </form>
    )
}
