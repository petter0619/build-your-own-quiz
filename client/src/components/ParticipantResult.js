import React from 'react';
import { Link } from 'react-router-dom';

export default function ParticipantResult({participant, correctAnswers, quizLength, quizId}) {    
    return (
        <div className="participant-result">
            <h4>Quiz completed!</h4>
            <p>{`Congratulations ${participant}! You scored ${correctAnswers} out of ${quizLength}`}</p>
            <Link to={`/quiz/${quizId}/results`}>
                <button className="btn btn-primary">See all quiz results so far...</button>
            </Link>
        </div>
    )
}
