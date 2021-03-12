import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import SingleAnswerPreview from '../components/SingleAnswerPreview';
import MultipleChoicePreview from '../components/MultipleChoicePreview';
// Helpers
import { createQuizFetch } from '../helpers';

export default function CreateQuizForm({ questions, removeQuestion }) {
    const [loading, setLoading] = useState(false);
    const [quizCreated, setQuizCreated] = useState({ created: false, quizId: '' });

    const postQuiz = async quizObj => {
        if (questions.length < 1) return;
        setLoading(true);
        createQuizFetch(quizObj)
            .then(quizId => {
                setQuizCreated({ created: true, quizId });
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            })
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
        <form onSubmit={handleSubmit} className="create-quiz-form">
            <label htmlFor="quizname" className="form-label">Name your quiz:</label>
            <input type="text" name="quizname" id="quizname" required className="form-control"/>
            <br />
            <label htmlFor="quizdesc" className="form-label">Describe your quiz:</label>
            <textarea name="quizdesc" id="quizdesc" rows="5" cols="50" className="form-control"/>
            <br />
            <p style={{fontWeight: 'bold'}}>Questions:</p>
            {questions.map((question, index) => {
                if (question.type === "multiple choice") {
                    return <MultipleChoicePreview
                        key={index}
                        question={question}
                        removeQuestion={removeQuestion}
                        index={index}
                    />
                } else if (question.type === "single answer") {
                    return <SingleAnswerPreview
                        key={index}
                        question={question}
                        removeQuestion={removeQuestion}
                        index={index}
                    />
                }
            })}
            {questions.length > 0 && <button type="submit" className="btn btn-success">{loading ? "Creating your quiz..." : "Create Quiz"}</button>}

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
