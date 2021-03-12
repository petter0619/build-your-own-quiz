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
        <form onSubmit={handleSubmit} className="add-question-form">
            <div className="input-group">
                <span className="input-group-text">Question:</span>
                <input type="text" name="question" id="question" required className="form-control"/>
            </div>
            <div className="input-group">
                <span className="input-group-text">Answer:</span>
                <input type="text" name="answer" id="answer" required className="form-control"/>
            </div>
            <button type="submit" className="btn btn-success">Add Question</button>
        </form>
    )
}
