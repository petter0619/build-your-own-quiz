import React from 'react';

export default function StartQuizForm({participant, setIndex}) {
    const handleSubmit = e => {
        e.preventDefault();
        participant.current = e.target.name.value;
        setIndex(0);
    }
    
    return (
        <form onSubmit={handleSubmit} className="start-quiz-form">
            <label htmlFor="name" className="form-label">Enter your name:</label>
            <input type="text" name="name" id="name" required className="form-control"/>
            <button type="submit" className="btn btn-primary">Start Quiz!</button>
        </form>
    )
}
