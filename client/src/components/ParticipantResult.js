import React from 'react';
import { Link } from 'react-router-dom';

export default function ParticipantResult({participant, correctAnswers, quizLength, quizId}) {    
    return (
        <div>
            <h1>Quiz completed!</h1>
            <p>{`You scored ${correctAnswers} out of ${quizLength}`}</p>
            <Link to={`/quiz/${quizId}/results`}>
                <button>See all quiz results so far...</button>
            </Link>
        </div>
    )
}
