import React from 'react';

export default function StartQuizForm({participant, setIndex}) {
    const handleSubmit = e => {
        e.preventDefault();
        participant.current = e.target.name.value;
        setIndex(0);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter your name:</label>
            <input type="text" name="name" id="name" required/>
            <button type="submit">Start Quiz!</button>
        </form>
    )
}
