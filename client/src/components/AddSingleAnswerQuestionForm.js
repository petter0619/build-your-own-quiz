import React from 'react';

export default function AddSingleAnswerQuestionForm({addQuestion, setShowSaForm}) {
    const handleSubmit = e => {
        e.preventDefault();
        const question = {
            type: 'single answer',
            question: e.target.question.value,
            answer: e.target.answer.value,
        }
        addQuestion(question);
        e.target.reset();
        setShowSaForm(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="question">Enter your question:</label>
            <input type="text" name="question" id="question" required/>
            <br />
            <label htmlFor="answer">What the answer is:</label>
            <input type="text" name="answer" id="answer" required/>
            <button type="submit">Add Question</button>
        </form>
    )
}
