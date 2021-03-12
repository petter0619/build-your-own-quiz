import React, { useState } from 'react';
// Components
import CreateQuizForm from '../components/CreateQuizForm';
import AddMultipleChoiceQuestionForm from '../components/AddMultipleChoiceQuestionForm';
import AddSingleAnswerQuestionForm from '../components/AddSingleAnswerQuestionForm';

export default function QuizBuilder() {
    const [questions, setQuestions] = useState([]);
    const [showMcForm, setShowMcForm] = useState(false);
    const [showSaForm, setShowSaForm] = useState(false);

    const addQuestion = questionObj => {
        const stateCopy = [...questions];
        stateCopy.push(questionObj);
        setQuestions(stateCopy);
    }

    const removeQuestion = index => {
        const stateCopy = [...questions];
        stateCopy.splice(index, 1);
        setQuestions(stateCopy);
    }

    return (
        <section className="quiz-builder-page">
            <h1>Build Your Own Quiz!</h1>
            <CreateQuizForm questions={questions} removeQuestion={removeQuestion}/>
            <button className="btn btn-primary" onClick={() => {
                setShowMcForm(!showMcForm);
                if (showSaForm) setShowSaForm(false);
            }}>
                + Add Multiple Choice Question
            </button>
            <button className="btn btn-primary" onClick={() => {
                setShowSaForm(!showSaForm);
                if (showMcForm) setShowMcForm(false);
            }}>
                + Add Single Answer Question
            </button>

            {showMcForm && <AddMultipleChoiceQuestionForm addQuestion={addQuestion} setShowMcForm={setShowMcForm}/>}
            {showSaForm && <AddSingleAnswerQuestionForm addQuestion={addQuestion} setShowSaForm={setShowSaForm}/>}
        </section>
    )
}
