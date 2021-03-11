import React from 'react';
import { Link } from 'react-router-dom';
// Components
import StartQuizForm from '../components/StartQuizForm';

export default function Home() {
    const mockQuizId = '123';
    return (
        <div>
            Home Page: /
            <StartQuizForm />
            <Link to={`/quiz/${mockQuizId}`}><button>Take Quiz!</button></Link>
            <Link to="/quizbuilder"><button>Build a Quiz!</button></Link>
        </div>
    );
}
