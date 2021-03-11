import React from 'react';
import { formatInputString } from '../helpers';

export default function SingleAnswerQuestion({question, answer, answerQuestion, skipQuestion }) {
    const handleSubmit = e => {
        e.preventDefault();
        const ans = formatInputString(e.target.answer.value);
        answerQuestion(ans);
        e.target.reset();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <p>{question}</p>
            <input type="text" name="answer" required/>
            <button type="button" onClick={skipQuestion}>Skip</button>
            <button type="submit">Answer</button>
        </form>
    )
}
