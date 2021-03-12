import React from 'react';

export default function MultipleChoicePreview({question, removeQuestion, index}) {
        
    return (
        <div className="question-preview question-preview--multiple-choice">
            <button type="button" className="btn btn-outline-danger" onClick={() => removeQuestion(index)}>X</button>

            <div className="input-group">
                <span className="input-group-text">Question:</span>
                <input type="text" name="question" id="question" value={question.question} disabled className="form-control"/>
            </div>
            <ul>
                {question.multipleChoices.map((q, index) => {
                    return <li key={index} className="input-group">
                        <span className="input-group-text">
                            {q === question.answer ? "Answer:" : "Option:"}
                        </span>
                        <input type="text" name={`option${index}`} id={`option${index}`} value={q} disabled className="form-control"/>
                    </li>
                })}
            </ul>
        </div>
    )
}
