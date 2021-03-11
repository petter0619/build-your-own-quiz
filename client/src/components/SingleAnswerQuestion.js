import React from 'react';

export default function SingleAnswerQuestion({question}) {
    return (
        <div>
            <button type="button">X</button>
            <label htmlFor="question">Question:</label>
            <input type="text" name="question" id="question" value={question.question} disabled/>
            <ul>
                <li>
                    <label htmlFor="answer">Answer:</label>
                    <input type="text" name="answer" id="answer" value={question.answer} disabled/>
                </li>
            </ul>
        </div>
    )
}
