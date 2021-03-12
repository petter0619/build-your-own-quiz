import React from 'react';
import { formatInputString } from '../helpers';

export default function MultipleChoiceQuestion({ question, multipleChoices, answerQuestion, skipQuestion }) {
    
    const handleSubmit = e => {
        e.preventDefault();
        const ans = formatInputString(e.target.choice.value);
        answerQuestion(ans);
        e.target.reset();
    }
    
    return (
        <form onSubmit={handleSubmit} className="quiz-question-form">
            <p>{question}</p>
            <div>
                {multipleChoices.map((choice, index) => {
                    return <div className="form-check" key={index}>
                        <label htmlFor={`choice${index}`} key={index} className="form-check-label">
                            <input type="radio" id={`choice${index}`} name={`choice`} value={choice} required className="form-check-input"/>
                            {choice}
                        </label>
                    </div>}
                )}
            </div>
            <button type="button" onClick={skipQuestion} className="btn btn-outline-danger">Skip</button>
            <button type="submit" className="btn btn-success">Answer</button>
        </form>
    )
}
