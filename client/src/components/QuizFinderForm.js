import React from 'react';
import { useHistory } from 'react-router-dom';

export default function QuizFinderForm() {
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/quiz/${e.target.quizid.value}`)
    }

    return (
        <form onSubmit={handleSubmit} className="quiz-finder-form">
            <h2>Quiz Time!</h2>
            <div className="form-text">Please enter your quiz ID below:</div>
            <input type="text" name="quizid" required className="form-control" placeholder="Quiz ID"/>
            <button type="submit" className="btn btn-primary">Take Quiz!</button>
        </form>
    )
}
