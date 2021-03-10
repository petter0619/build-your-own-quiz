import React from 'react';
// Components
import CreateQuizForm from '../components/CreateQuizForm';
import AddMultipleChoiceQuestionForm from '../components/AddMultipleChoiceQuestionForm';
import AddSingleAnswerQuestionForm from '../components/AddSingleAnswerQuestionForm';

export default function QuizBuilder() {
    return (
        <div>
            QuizBuilder Page: /quizbuilder
            <CreateQuizForm />
            <AddMultipleChoiceQuestionForm />
            <AddSingleAnswerQuestionForm />
        </div>
    )
}
