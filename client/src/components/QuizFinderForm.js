import React from 'react';
import { useHistory } from 'react-router-dom';

export default function QuizFinderForm() {
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/quiz/${e.target.quizid.value}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="quizid" required/>
            <button type="submit">Take Quiz!</button>
        </form>
    )
}
