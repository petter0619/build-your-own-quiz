import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Components
import SingleAnswerQuestion from '../components/SingleAnswerQuestion';
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion';

export default function CreateQuizForm({ questions }) {
    const [loading, setLoading] = useState(false);
    const [quizCreated, setQuizCreated] = useState({ created: false, quizId: '' });

    const postQuiz = async quizObj => {
        if (questions.length < 1) return;
        setLoading(true);
        try {
            const rawResponse = await fetch('http://localhost:3001/api/quiz/', {
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(quizObj),
            });
            const {quizId} = await rawResponse.json();
            setQuizCreated({ created: true, quizId });
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    }

    const handleSubmit = e => {
        e.preventDefault();

        const newQuiz = {
            quizInfo: {
                name: e.target.quizname.value,
                description: e.target.quizdesc.value,
            },
            questionsAndAnswers: questions,
        }
        postQuiz(newQuiz);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="quizname">Name your quiz:</label>
            <input type="text" name="quizname" id="quizname" required/>
            <br />
            <label htmlFor="quizdesc">Describe your quiz:</label>
            <textarea name="quizdesc" id="quizdesc" rows="5" cols="50"/>

            <p style={{fontWeight: 'bold'}}>Questions:</p>
            {questions.map((question, index) => {
                if (question.type === "multiple choice") {
                    return <MultipleChoiceQuestion key={index} question={question}/>
                } else if (question.type === "single answer") {
                    return <SingleAnswerQuestion key={index} question={question}/>
                }
            })}
            <button type="submit">{loading ? "Creating your quiz..." : "Create Quiz"}</button>

            {quizCreated.created && <div>
                <p>You quiz was successfully created! You can find it here:</p>
                <br />
                <Link to={`/quiz/${quizCreated.quizId}`}>
                    {`${window.location.origin}/quiz/${quizCreated.quizId}`}
                </Link>
            </div>}
        </form>
    )
}
