import React from 'react'

export default function SingleAnswerQuestion({question, answer, answerQuestion, skipQuestion }) {
    const handleSubmit = e => {
        e.preventDefault();
        const ans = e.target.answer.value;
        answerQuestion(ans);
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
