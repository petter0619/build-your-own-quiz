import React from 'react';
import { shuffleArray } from '../helpers';

export default function AddMultipleChoiceQuestionForm({addQuestion, setShowMcForm}) {
    const handleSubmit = e => {
        e.preventDefault();
        const question = {
            type: 'multiple choice',
            question: e.target.question.value,
            answer: e.target.answer.value,
            multipleChoices: shuffleArray([
                e.target.answer.value,
                e.target.choice1.value,
                e.target.choice2.value,
            ]),
        }
        addQuestion(question);
        e.target.reset();
        setShowMcForm(false);
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
            <div className="input-group">
                <span className="input-group-text">Option:</span>
                <input type="text" name="choice1" id="choice1" required className="form-control"/>
            </div>
            <div className="input-group">
                <span className="input-group-text">Option:</span>
                <input type="text" name="choice2" id="choice2" required className="form-control"/>
            </div>

            <button type="submit" className="btn btn-success">Add Question</button>
        </form>
    )
}
