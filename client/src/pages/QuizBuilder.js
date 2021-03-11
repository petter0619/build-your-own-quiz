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

    return (
        <div>
            QuizBuilder Page: /quizbuilder
            <CreateQuizForm questions={questions}/>
            <button onClick={() => {
                setShowMcForm(true);
                if (showSaForm) setShowSaForm(false);
            }}>
                + Add Multiple Choice Question
            </button>
            <button onClick={() => {
                setShowSaForm(true);
                if (showMcForm) setShowMcForm(false);
            }}>
                + Add Single Answer Question
            </button>

            {showMcForm && <AddMultipleChoiceQuestionForm addQuestion={addQuestion} setShowMcForm={setShowMcForm}/>}
            {showSaForm && <AddSingleAnswerQuestionForm addQuestion={addQuestion} setShowSaForm={setShowSaForm}/>}
        </div>
    )
}
