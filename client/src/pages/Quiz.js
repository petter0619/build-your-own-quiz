import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Componets
import QuizQuestion from '../components/QuizQuestion';
import StartQuizForm from '../components/StartQuizForm';
import Loading from '../components/Loading';
import ParticipantResult from '../components/ParticipantResult';

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
        fetch(`http://localhost:3001/api/quiz/${quizId}`)
            .then(res => res.json())
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

    const addAnswer = newAnswer => {
        if (newAnswer === 'correct') setCorrectAnswers(correctAnswers + 1);
    };

    const putResults = async (participantResultObj, id) => {
        setLoading(true);
        try {
            const rawResponse = await fetch(`http://localhost:3001/api/quiz/${id}/results`, {
                    method: 'PUT',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(participantResultObj),
            });
            const {quizId} = await rawResponse.json();
            setQuizCompleted(true);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    const nextQuestion = async () => {
        if (index + 1 === questions.length) {
            const participantResult = {
                name: participant.current,
                correctAnswers,
            };
            putResults(participantResult, quizId)
        } else {
            setIndex(index + 1);
        }
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
            />}

            {error.isError && <p>{error.error}</p>}
        </div>
    )
}
