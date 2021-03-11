import React from 'react';

export default function MultipleChoicePreview({question}) {
    
    //const { question, answer, multipleChoices } = question;
    
    return (
        <div>
            <button type="button">X</button>

            <label htmlFor="question">Question:</label>
            <input type="text" name="question" id="question" value={question.question} disabled/>
            <br />
            <ul>
                {question.multipleChoices.map((q, index) => {
                    return <li key={index}>
                        <label htmlFor={`option${index}`}>
                            {q === question.answer ? "Answer:" : "Option:"}
                        </label>
                        <input type="text" name={`option${index}`} id={`option${index}`} value={q} disabled/>
                    </li>
                })}
            </ul>
        </div>
    )
}
