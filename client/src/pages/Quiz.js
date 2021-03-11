import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Components
import QuizQuestion from '../components/QuizQuestion';
import StartQuizForm from '../components/StartQuizForm';
import Loading from '../components/Loading';
import ParticipantResult from '../components/ParticipantResult';
// Helpers
import { getQuizData, updateParticipantResult } from '../helpers';

export default function Quiz() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({ isError: false, error: null });
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(-1);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const quizId = useParams().id;
    const participant = useRef();
    const quizName = useRef();

    useEffect(() => {
        getQuizData(quizId)
            .then(data => {
                if (data.error) throw new Error(data.message);

                const { quizInfo, questionsAndAnswers } = data;
                quizName.current = quizInfo.name;
                setQuestions(questionsAndAnswers);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                const message = err.message.includes('no such file or directory') 
                    ? 'Sorry! That quiz does not exist!'
                    : 'Ooops! Something went wrong...';
                setError({ isError: true, error: message });
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (quizCompleted) {
            console.log(correctAnswers)
            const participantResult = {
                name: participant.current,
                correctAnswers,
            };
            setLoading(true);
            updateParticipantResult(participantResult, quizId)
                .then(data => {
                    setQuizCompleted(true);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                })
        }
    }, [quizCompleted]);

    const nextQuestion = async () => {
        if (index + 1 === questions.length) {
            setQuizCompleted(true);
        } else {
            setIndex(index + 1);
        }
    };

    const addAnswer = newAnswer => {
        if (newAnswer === 'correct') setCorrectAnswers(correctAnswers + 1);
        nextQuestion();
    };

    return (
        <div>
            {loading && <Loading />}

            {!loading && !error.isError && <header>
                <h1>{quizName.current}</h1>
            </header>}

            {participant.current === undefined && !error.isError && <StartQuizForm participant={participant} setIndex={setIndex}/>}
            {participant.current !== undefined && !quizCompleted && <QuizQuestion
                q={questions[index]}
                nextQuestion={nextQuestion}
                addAnswer={addAnswer}
            />}
            {!loading && quizCompleted && <ParticipantResult
                participant={participant.current}
                correctAnswers={correctAnswers}
                quizLength={questions.length}
                quizId={quizId}
            />}

            {error.isError && <p>{error.error}</p>}
        </div>
    )
}
