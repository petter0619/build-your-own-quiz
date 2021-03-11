import React from 'react';
import { Link } from 'react-router-dom';
// Components
import QuizFinderForm from '../components/QuizFinderForm';

export default function Home() {
    return (
        <div>
            Home Page: /
            <QuizFinderForm />
            <br />
            <Link to="/quizbuilder"><button>Build a Quiz!</button></Link>
        </div>
    );
}
