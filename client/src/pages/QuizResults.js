import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
// Components
import Loading from '../components/Loading';
// Helpers
import { getQuizData } from '../helpers';

export default function QuizResults() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({ isError: false, error: null });
    const [results, setResults] = useState([]);

    const quizId = useParams().id;
    const quizInfo = useRef();

    useEffect(() => {
        getQuizData(quizId)
            .then(data => {
                if (data.error) throw new Error(data.message);
                quizInfo.current = data.quizInfo;
                const sortedData = data.results.sort((firstResult, secondResult) => {
                    return secondResult.correctAnswers - firstResult.correctAnswers
                });
                setResults(sortedData);
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

    return (
        <section className="quiz-results-page">
            {loading && <Loading />}
            {!loading && results.length > 0 && <>
                <h1>{quizInfo.current.name} Scoreboard</h1>
                <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                    {results.map((result, index) => {
                        return <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td className="td-name">{result.name}</td>
                            <td>{`${result.correctAnswers} / ${quizInfo.current.questionCount}`}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
                </div>
            </>}
        </section>
    )
}
