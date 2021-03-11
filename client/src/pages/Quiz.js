import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Componets
import QuizQuestion from '../components/QuizQuestion';
import StartQuizForm from '../components/StartQuizForm';
import Loading from '../components/Loading';

export default function Quiz() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({ isError: false, error: null });
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState();
    const [answers, setAnswers] = useState([]);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const quizId = useParams().id;
    const participant = useRef();
    let quizName;

    useEffect(() => {
        fetch(`http://localhost:3001/api/quiz/${quizId}`)
            .then(res => res.json())
            .then(data => {
                const { quizInfo, questionsAndAnswers } = data;
                setError({ isError: false, error: null });
                setLoading(false);
                quizName = quizInfo.name;
                setQuestions(questionsAndAnswers);
            })
            .catch(err => {
                setError({ isError: true, error: err.message });
            });
    }, []);

    const addAnswer = newAnswer => {
        const answersCopy = [...answers];
        answersCopy.push(newAnswer);
        setAnswers(answersCopy);
    };

    const nextQuestion = () => {
        if (index + 1 === questions.length) {
            setQuizCompleted(true);
        } else {
            setIndex(index + 1);
        }
    };

    return (
        <div>
            Play Quiz Page: /quiz/:id
            {loading && <Loading />}

            {participant.current === undefined  && <StartQuizForm participant={participant} setIndex={setIndex}/>}
            {participant.current !== undefined && !quizCompleted && <QuizQuestion
                q={questions[index]}
                nextQuestion={nextQuestion}
                addAnswer={addAnswer}
            />}
            {quizCompleted && <h1>Quiz completed!</h1>}
        </div>
    )
}
