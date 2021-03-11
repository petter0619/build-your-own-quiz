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
        <form onSubmit={handleSubmit}>
            <label htmlFor="question">Enter your question:</label>
            <input type="text" name="question" id="question" required/>
            <br />
            <label htmlFor="answer">What the answer is:</label>
            <input type="text" name="answer" id="answer" required/>
            <br />
            <label htmlFor="choice1">Multiple choice option:</label>
            <input type="text" name="choice1" id="choice1" required/>
            <br />
            <label htmlFor="choice2">Multiple choice option:</label>
            <input type="text" name="choice2" id="choice2" required/>

            <button type="submit">Add Question</button>
        </form>
    )
}
