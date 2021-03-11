import React from 'react';

export default function ParticipantResult({participant, correctAnswers, quizLength}) {    
    return (
        <div>
            <h1>Quiz completed!</h1>
            <p>{`You scored ${correctAnswers} out of ${quizLength}`}</p>
        </div>
    )
}
