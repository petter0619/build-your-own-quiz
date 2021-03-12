import React from 'react';
import { Link } from 'react-router-dom';
// Components
import QuizFinderForm from '../components/QuizFinderForm';

export default function Home() {
    return (
        <section className="home-page">
            <div className="home-page__div">
                <QuizFinderForm />
            </div>
            <div className="home-page__div">
                <h2>Build Your Own Quiz!</h2>
                <Link to="/quizbuilder"><button className="btn btn-success">Build a Quiz!</button></Link>
            </div>
        </section>
    );
}
