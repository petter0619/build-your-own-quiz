import React from 'react';

export default function MultipleChoiceQuestion({ question, answer, multipleChoices, answerQuestion, skipQuestion }) {
    
    const handleSubmit = e => {
        e.preventDefault();
        const ans = e.target.choice.value;
        answerQuestion(ans);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <p>{question}</p>
            <ul>
                {multipleChoices.map((choice, index) => {
                    return <li key={index}>
                        <label htmlFor={`choice${index}`}>
                            <input type="radio" id={`choice${index}`} name={`choice`} value={choice} required/>
                            {choice}
                        </label>
                    </li>
                })}
            </ul>
            <button type="button" onClick={skipQuestion}>Skip</button>
            <button type="submit">Answer</button>
        </form>
    )
}
