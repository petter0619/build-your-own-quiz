import React from 'react';

export default function SingleAnswerPreview({question, removeQuestion, index}) {
    return (
        <div className="question-preview question-preview--single-answer">
            <button type="button" className="btn btn-outline-danger" onClick={() => removeQuestion(index)}>X</button>
            <div className="input-group">
                <span className="input-group-text">Question:</span>
                <input type="text" name="question" id="question" className="form-control" value={question.question} disabled/>
            </div>
            <div className="input-group">
                <span className="input-group-text">Answer:</span>
                <input type="text" name="answer" id="answer" className="form-control" value={question.answer} disabled/>
            </div>
        </div>
    )
}
